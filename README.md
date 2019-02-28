# joinpdf
Join one PDF scanned only side-A and another PDF scanned only side-B.
将只扫描了正面(A面)的pdf文件和只扫描了反面(B面)的PDF文件合并。

很多扫描仪批量扫描成PDF的时候只能扫描单面。这样将得到只有正面页码1,3,5,7,9...的文件和只有背面页码10,8,6,4....的文件。
这个小工具可以将两者合并。
## 使用方法
将A面的pdf命名为`a.pdf`，B面的pdf命名为`b.pdf`，复制到项目根目录下，运行下面的命令：
```
git clone https://github.com/darceye/joinpdf.git
cd joinpdf
npm install
node .
```
将输出合并文件`joined.pdf`