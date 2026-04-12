import os
img_dir = r"e:\我的建筑学作业\coding\个人网站\images"
files = sorted(os.listdir(img_dir))
for f in files:
    print(f)
