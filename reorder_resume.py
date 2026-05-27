"""
Reorder sections in resume_2026.docx for Google Research Scientist format:

Current order:  Education → Research Experience → Publications → Work Experience → Activities → Skills
New order:      Research Experience → Publications → Education → Skills → Work Experience → Activities

The special EDUCATION watermark paragraph (para 2, before the name) is left in place.
A new EDUCATION section header is inserted before the education content in its new position.
"""

from copy import deepcopy
from docx import Document
from docx.oxml.ns import qn
from docx2pdf import convert

DOCX = "public/resume_2026.docx"
PDF_OUT = "private-docs/resume_2026.pdf"
NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"


def get_text(elem):
    return "".join(t.text or "" for t in elem.iter(f"{{{NS}}}t")).strip()


def find_first(children, target):
    for i, c in enumerate(children):
        if get_text(c) == target:
            return i
    raise ValueError(f"Section '{target}' not found in document")


def make_section_header(template_elem, text):
    """Clone a section header element and replace its text content."""
    clone = deepcopy(template_elem)
    # Remove all runs
    for r in clone.findall(f"{{{NS}}}r"):
        clone.remove(r)
    # Remove hyperlinks
    for h in clone.findall(f"{{{NS}}}hyperlink"):
        clone.remove(h)
    # Add a single run with the text (reuse run formatting from template)
    template_runs = template_elem.findall(f"{{{NS}}}r")
    if template_runs:
        run_clone = deepcopy(template_runs[0])
        # Set text
        t_elems = run_clone.findall(f"{{{NS}}}t")
        if t_elems:
            t_elems[0].text = text
            # Remove extra t elements
            for t in t_elems[1:]:
                run_clone.remove(t)
        else:
            from lxml import etree
            t_elem = etree.SubElement(run_clone, f"{{{NS}}}t")
            t_elem.text = text
        clone.append(run_clone)
    return clone


def main():
    doc = Document(DOCX)
    body = doc.element.body

    # Get ALL direct children of body
    children = list(body)
    texts = [get_text(c) for c in children]

    # Locate section header indices
    edu_watermark_i = find_first(children, "EDUCATION")      # ~2  (DO NOT MOVE)
    res_exp_i       = find_first(children, "RESEARCH EXPERIENCE")  # ~13
    pub_i           = find_first(children, "PUBLICATIONS")   # ~29
    work_i          = find_first(children, "WORK EXPERIENCE") # ~34
    act_i           = find_first(children, "ACTIVITIES")     # ~59
    skills_i        = find_first(children, "SKILLS")         # ~61

    print(f"Section indices: EDU_watermark={edu_watermark_i}, RES_EXP={res_exp_i}, "
          f"PUB={pub_i}, WORK={work_i}, ACT={act_i}, SKILLS={skills_i}")

    # The header block: everything from 0 up to (but not including) the education CONTENT
    # edu_watermark is at index 2; education CONTENT starts right after the contact block.
    # From the docx: indices 0-5 = empty, empty, EDUCATION watermark, name, contact, empty
    # Index 6 starts the actual degree entries.
    HEADER_END = edu_watermark_i + 4  # 0,1,2(watermark),3(name),4(contact),5(empty) = indices 0-5

    # Separate sectPr (page layout) — must stay at end
    sectPr_elems = [c for c in children if c.tag.endswith("}sectPr")]
    non_sectPr = [c for c in children if not c.tag.endswith("}sectPr")]

    # Re-derive indices on non_sectPr list
    def find_in(lst, target):
        for i, c in enumerate(lst):
            if get_text(c) == target:
                return i
        raise ValueError(target)

    edu_wm   = find_in(non_sectPr, "EDUCATION")
    res_exp  = find_in(non_sectPr, "RESEARCH EXPERIENCE")
    pub      = find_in(non_sectPr, "PUBLICATIONS")
    work     = find_in(non_sectPr, "WORK EXPERIENCE")
    act      = find_in(non_sectPr, "ACTIVITIES")
    skills   = find_in(non_sectPr, "SKILLS")
    total    = len(non_sectPr)

    # Blocks
    block_header     = non_sectPr[0 : res_exp]          # indices 0..(res_exp-1)
    # This includes: empty, empty, EDUCATION watermark, name, contact, empty, + education content (6..res_exp-1)

    # Split header block: true header (0..5) vs education content (6..res_exp-1)
    # edu_wm=2; +1 name, +1 contact, +1 empty = edu_wm+4 as exclusive upper bound
    HEADER_EXCLUSIVE = edu_wm + 4  # = 6 → indices 0..5 are header, index 6 starts edu content
    block_true_header  = non_sectPr[0 : HEADER_EXCLUSIVE]        # 0..5
    block_edu_content  = non_sectPr[HEADER_EXCLUSIVE : res_exp]  # 6..12

    block_res_exp    = non_sectPr[res_exp : pub]         # RESEARCH EXPERIENCE section
    block_pub        = non_sectPr[pub : work]            # PUBLICATIONS section
    block_work       = non_sectPr[work : act]            # WORK EXPERIENCE section
    block_act        = non_sectPr[act : skills]          # ACTIVITIES section
    block_skills     = non_sectPr[skills : total]        # SKILLS section

    # Create a proper EDUCATION section header (clone style from RESEARCH EXPERIENCE header)
    res_exp_header_elem = non_sectPr[res_exp]
    edu_header_new = make_section_header(res_exp_header_elem, "EDUCATION")

    # New order:
    # 1. True header (name + contact, with EDUCATION watermark)
    # 2. Research Experience
    # 3. Publications
    # 4. EDUCATION header (new) + education content
    # 5. Skills
    # 6. Work Experience
    # 7. Activities
    new_children = (
        block_true_header
        + block_res_exp
        + block_pub
        + [edu_header_new]
        + block_edu_content
        + block_skills
        + block_work
        + block_act
        + sectPr_elems
    )

    # Clear body and re-insert
    for child in list(body):
        body.remove(child)
    for elem in new_children:
        body.append(elem)

    doc.save(DOCX)
    print(f"Saved {DOCX}")

    convert(DOCX, PDF_OUT)
    print(f"Saved {PDF_OUT}")


if __name__ == "__main__":
    main()
