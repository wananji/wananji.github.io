import fitz
import os

base = r"e:\我的建筑学作业\coding\个人网站"
src = os.path.join(base, r"作品集\排版")
out_img = os.path.join(base, "images")

folders_order = [
    "VERTICAL GARDEN",
    "cycling",
    "AUTONOMOUS VEHICLE INCUBATOR",
    "FUSUIJING HAUNTED HOUSE",
    "other works",
]

# 重新转换，使用更小的分辨率
for idx, folder in enumerate(folders_order, start=1):
    folder_path = os.path.join(src, folder)
    if not os.path.isdir(folder_path):
        continue
    pdfs = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(".pdf")])

    for pdf_name in pdfs:
        pdf_path = os.path.join(folder_path, pdf_name)
        base_name = os.path.splitext(pdf_name)[0]
        img_name = f"{idx}_{base_name}_p1.png"
        img_path = os.path.join(out_img, img_name)

        # 检查文件大小，超过 80MB 就重新生成更小版本
        if os.path.exists(img_path):
            size_mb = os.path.getsize(img_path) / 1024 / 1024
            if size_mb > 80:
                print(f"[压缩] {img_name} ({size_mb:.1f} MB) -> 0.6x")
                doc = fitz.open(pdf_path)
                page = doc.load_page(0)
                mat = fitz.Matrix(0.6, 0.6)
                pix = page.get_pixmap(matrix=mat)
                pix.save(img_path)
                doc.close()
                new_size = os.path.getsize(img_path) / 1024 / 1024
                print(f"  -> {new_size:.1f} MB")

print("完成！")
