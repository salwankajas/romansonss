import os
path = '/home/viwichi_/Desktop/viwicodes/planVARIBLY/rom/romanson/src/Components/Gallery/Inaugration'
files = os.listdir(path)


for index, file in enumerate(files):
    os.rename(os.path.join(path, file), os.path.join(path, ''.join([str(index), '.jpg'])))