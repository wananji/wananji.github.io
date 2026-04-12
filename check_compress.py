import fitz
import os
import io

base = r"e:\我的建筑学作业\coding\个人网站\images"
src = r"e:\我的建筑学作业\coding\个人网站\作品集\排版\other works\A1_CY2215.pdf"
out_png = os.path.join(base, "5_A1_CY2215_p1.png")
out_jpg = os.path.join(base, "5_A1_CY2215_p1.jpg")

# 转为 JPEG，压缩质量 85
doc = fitz.open(src)
page = doc.load_page(0)

# 检查页面尺寸
rect = page.rect
print(f"Page size: {rect.width:.0f} x {rect.height:.0f}")

# 尝试 0.4 倍压缩
mat = fitz.Matrix(0.4, 0.4)
pix = page.get_pixmap(matrix=mat)
print(f"Image size at 0.4x: {pix.width} x {pix.height}")

# 保存为 PNG
pix.save(out_png)
png_size = os.path.getsize(out_png) / 1024 / 1024
print(f"PNG at 0.4x: {png_size:.1f} MB")

# 尝试 0.3 倍压缩
mat = fitz.Matrix(0.3, 0.3)
pix = page.get_pixmap(matrix=mat)
pix.save(out_png)
png_size = os.path.getsize(out_png) / 1024 / 1024
print(f"PNG at 0.3x: {png_size:.1f} MB")

doc.close()
