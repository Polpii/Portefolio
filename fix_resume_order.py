"""
One-shot fix for the current mixed state of resume_2026.docx.

Current (broken) state:
  0-5:   header (EDUCATION watermark, name, contact, empty)
  6-21:  RESEARCH EXPERIENCE  ✓
  22-39: PUBLICATIONS          ✓
  40:    EDUCATION header      ✓  (but Master Degree is missing below it)
  41-46: partial edu content  (IFT ESILV onwards, MISSING Master Degree)
  47:    duplicate EDUCATION   ← remove
  48:    Master Degree         ← move to after para 40
  49-52: SKILLS               ✓
  53-54: ACTIVITIES + chess   ← must go AFTER work experience
  55-79: WORK EXPERIENCE      ← currently after ACTIVITIES (wrong)

Target order:
  0-5   header
  6-21  RESEARCH EXPERIENCE
  22-39 PUBLICATIONS
  40    EDUCATION header
  48    Master Degree (moved here)
  41-46 rest of edu content
  49-52 SKILLS
  55-79 WORK EXPERIENCE
  53-54 ACTIVITIES
"""

from copy import deepcopy
from docx import Document
from docx2pdf import convert

DOCX = "public/resume_2026.docx"
PDF_OUT = "private-docs/resume_2026.pdf"


def main():
    doc = Document(DOCX)
    body = doc.element.body
    children = list(body)

    # Separate sectPr (page layout) — must stay at end
    sectPr = [c for c in children if c.tag.endswith("}sectPr")]
    elems  = [c for c in children if not c.tag.endswith("}sectPr")]

    # Known indices from paragraph inspection (0-based, matching the broken state above)
    block_header   = elems[0:6]      # 0-5
    block_res_exp  = elems[6:22]     # 6-21
    block_pub      = elems[22:40]    # 22-39
    edu_header     = [elems[40]]     # 40  EDUCATION header
    edu_ift        = elems[41:47]    # 41-46  IFT ESILV + UQAC + empty
    # elems[47] = duplicate EDUCATION  ← skip
    master_degree  = [elems[48]]     # 48  Master Degree (misplaced)
    block_skills   = elems[49:53]    # 49-52
    block_act      = elems[53:55]    # 53-54  ACTIVITIES + chess
    block_work     = elems[55:]      # 55-79  WORK EXPERIENCE

    new_order = (
        block_header
        + block_res_exp
        + block_pub
        + edu_header
        + master_degree        # Master Degree first in education block
        + edu_ift              # IFT ESILV, UQAC, etc.
        + block_skills
        + block_work           # Work BEFORE Activities
        + block_act
        + sectPr
    )

    for child in list(body):
        body.remove(child)
    for elem in new_order:
        body.append(elem)

    doc.save(DOCX)
    print(f"Saved {DOCX}")

    convert(DOCX, PDF_OUT)
    print(f"Saved {PDF_OUT}")


if __name__ == "__main__":
    main()
