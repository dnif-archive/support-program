import os

d='.'
dirs = filter(lambda x: os.path.isdir(os.path.join(d, x)), os.listdir(d))
print dirs
dirs.remove(".git")
dirs.remove(".gitbook")
dirs.remove(".vuepress")
dirs.remove("node_modules")

print dirs

def rm_notes(filed):
    filed = filed.replace("{% hint style=\"info\" %}", "::: tip")
    filed = filed.replace("{% endhint %}", ":::")
    return filed

def rp_images(filed):
    filed = filed.replace("../.gitbook/assets", "/images")
    return filed

for d in dirs:
    for ii in os.listdir(d):
        filer = d + '/' + ii
        f = open(filer, 'r')
        filed = f.read()
        f.close()
        
        # replace tips
        rm_notes(filed)

        # align images
        rp_images(filed)


        # (../.gitbook/assets/phone-support%20%282%29.png)