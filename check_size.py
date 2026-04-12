import os
base = r"e:\我的建筑学作业\coding\个人网站\images"
f = "5_A1_CY2215_p1.png"
path = os.path.join(base, f)
size = os.path.getsize(path)
print(f"File: {f}")
print(f"Size on disk: {size / 1024 / 1024:.2f} MB")

# 同时检查压缩后的文件
import fitz
src = r"e:\我的建筑学作业\coding\个人网站\作品集\排版\other works\A1_CY2215.pdf"
doc = fitz.open(src)
page = doc.load_page(0)
mat = fitz.Matrix(0.5, 0.5)
pix = page.get_pixmap(matrix=mat)
test_path = os.path.join(base, "test_compress.png")
pix.save(test_path)
test_size = os.path.getsize(test_path)
print(f"Recompressed size: {test_size / 1024 / 1024:.2f} MB")
os.remove(test_path)
doc.close()
