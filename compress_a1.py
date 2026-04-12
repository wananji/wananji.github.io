import fitz
import os

base = r"e:\我的建筑学作业\coding\个人网站\images"
src = r"e:\我的建筑学作业\coding\个人网站\作品集\排版\other works\A1_CY2215.pdf"
out = os.path.join(base, "5_A1_CY2215_p1.png")

doc = fitz.open(src)
page = doc.load_page(0)
# 0.3x 倍率，7.8 MB
mat = fitz.Matrix(0.3, 0.3)
pix = page.get_pixmap(matrix=mat)
pix.save(out)
doc.close()

size = os.path.getsize(out) / 1024 / 1024
print(f"Done: {size:.2f} MB")
