"""
Normalize all section headers in resume_2026.docx and remove the duplicate
EDUCATION watermark at the top.

Target state:
- Remove the EDUCATION watermark paragraph that sits ABOVE the name
- All section headers (RESEARCH EXPERIENCE, PUBLICATIONS, EDUCATION, SKILLS,
  WORK EXPERIENCE, ACTIVITIES) must use the same paragraph style "Titre1"
  with NO per-run size or font override, so they all render identically
  (same font, same size, same underline, same color).
"""

from copy import deepcopy
from docx import Document
from docx2pdf import convert
from lxml import etree

DOCX = "public/resume_2026.docx"
PDF_OUT = "private-docs/resume_2026.pdf"
NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
W = f"{{{NS}}}"

SECTION_TITLES = {
    "RESEARCH EXPERIENCE",
    "PUBLICATIONS",
    "EDUCATION",
    "SKILLS",
    "WORK EXPERIENCE",
    "ACTIVITIES",
}


def get_text(p_elem):
    return "".join(t.text or "" for t in p_elem.iter(f"{W}t")).strip()


def set_pStyle(p_elem, style_val):
    pPr = p_elem.find(f"{W}pPr")
    if pPr is None:
        pPr = etree.SubElement(p_elem, f"{W}pPr")
        p_elem.insert(0, pPr)
    pStyle = pPr.find(f"{W}pStyle")
    if pStyle is None:
        pStyle = etree.SubElement(pPr, f"{W}pStyle")
        pPr.insert(0, pStyle)
    pStyle.set(f"{W}val", style_val)


def strip_run_overrides(p_elem):
    """Remove per-run formatting overrides that fight the paragraph style."""
    for r in p_elem.findall(f"{W}r"):
        rPr = r.find(f"{W}rPr")
        if rPr is None:
            continue
        # Remove explicit size, font, bold, italic, color, underline overrides
        for tag in ("sz", "szCs", "rFonts", "b", "bCs", "i", "iCs",
                    "color", "u", "spacing", "w", "noProof"):
            for elem in rPr.findall(f"{W}{tag}"):
                rPr.remove(elem)
        # Keep lang or other innocuous tags. If rPr is now empty, remove it.
        if len(rPr) == 0:
            r.remove(rPr)


def main():
    doc = Document(DOCX)
    body = doc.element.body
    children = list(body)

    # ── 1. Remove the EDUCATION watermark that sits ABOVE the name ──
    # We identify it as the FIRST occurrence of "EDUCATION" that appears
    # BEFORE the PAUL-PETER ARSLAN paragraph.
    name_index = None
    for i, c in enumerate(children):
        if get_text(c) == "PAUL-PETER ARSLAN":
            name_index = i
            break
    if name_index is None:
        raise RuntimeError("Name paragraph not found")

    removed_watermark = False
    for i in range(name_index):
        if get_text(children[i]) == "EDUCATION":
            body.remove(children[i])
            removed_watermark = True
            print(f"Removed EDUCATION watermark at index {i}")
            break

    # ── 2. Normalize ALL section header paragraphs ──
    for p_elem in body.findall(f"{W}p"):
        text = get_text(p_elem)
        if text in SECTION_TITLES:
            set_pStyle(p_elem, "Titre1")
            strip_run_overrides(p_elem)
            print(f"Normalized header: {text}")

    doc.save(DOCX)
    print(f"Saved {DOCX} (watermark removed: {removed_watermark})")

    convert(DOCX, PDF_OUT)
    print(f"Saved {PDF_OUT}")


if __name__ == "__main__":
    main()
