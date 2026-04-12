import os
import fitz

base = r"e:\我的建筑学作业\coding\个人网站\images"
files = sorted(os.listdir(base))
big = [(f, os.path.getsize(os.path.join(base, f))/1024/1024) for f in files if f.endswith(".png")]
big.sort(key=lambda x: -x[1])
for n, s in big:
    print(f"{s:.1f} MB {n}")

# 压缩超过 80MB 的文件
src = r"e:\我的建筑学作业\coding\个人网站\作品集\排版"
for name, size in big:
    if size > 80:
        print(f"\n[压缩] {name} ({size:.1f} MB)")
        # 从文件名提取信息
        parts = name.split("_")
        idx = parts[0]
        # 查找对应的 PDF
        found = False
        for folder in os.listdir(src):
            fpath = os.path.join(src, folder)
            if not os.path.isdir(fpath):
                continue
            for pdf in os.listdir(fpath):
                if not pdf.lower().endswith(".pdf"):
                    continue
                bn = os.path.splitext(pdf)[0]
                if bn in name:
                    pdf_path = os.path.join(fpath, pdf)
                    img_path = os.path.join(base, name)
                    print(f"  找到 PDF: {pdf_path}")
                    doc = fitz.open(pdf_path)
                    page = doc.load_page(0)
                    mat = fitz.Matrix(0.5, 0.5)
                    pix = page.get_pixmap(matrix=mat)
                    pix.save(img_path)
                    doc.close()
                    new_size = os.path.getsize(img_path) / 1024 / 1024
                    print(f"  -> {new_size:.1f} MB")
                    found = True
                    break
            if found:
                break
