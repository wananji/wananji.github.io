import fitz
import os

base = r"e:\我的建筑学作业\coding\个人网站\作品集\排版"

folders = [
    ("VERTICAL GARDEN", "images/1_排版_04-05_p1.png"),
    ("cycling", "images/2_排版_12-13_p1.png"),
    ("AUTONOMOUS VEHICLE INCUBATOR", "images/3_排版_24-25_p1.png"),
    ("FUSUIJING HAUNTED HOUSE", "images/4_排版_36-37_p1.png"),
    ("other works", "images/5_A1_CY2215_p1.png"),
]

for folder, img in folders:
    folder_path = os.path.join(base, folder)
    pdfs = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(".pdf")])
    if not pdfs:
        print(f"[跳过] {folder}")
        continue

    pdf_path = os.path.join(folder_path, pdfs[0])
    doc = fitz.open(pdf_path)
    page = doc[0]
    text = page.get_text()
    doc.close()

    print(f"\n{'='*60}")
    print(f"[{folder}]")
    print(f"PDF: {pdfs[0]}")
    print(f"TEXT:\n{text.strip()}")