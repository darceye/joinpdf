const {PDFDocumentFactory, PDFDocumentWriter, StandardFonts, drawText} = require('pdf-lib');
const  fs =  require('fs')
const pdfDoc = PDFDocumentFactory.create();
const pdfBytesA = fs.readFileSync('a.pdf')
const pdfBytesB = fs.readFileSync('b.pdf')

const pdfDocA =  PDFDocumentFactory.load(pdfBytesA);
const pdfDocB =  PDFDocumentFactory.load(pdfBytesB);

const pagesA = pdfDocA.getPages()
const pagesB = pdfDocB.getPages()

if(pagesA.length != pagesB.length){
    console.log('The Pages of the pdfs are not same.')
    return
}
let pagesNum = pagesA.length
for(var i = 0; i < pagesNum; i+=1){
    pdfDoc.addPage(pagesA[i]);
    pdfDoc.addPage(pagesB[pagesNum - i - 1])
}
 
const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

fs.writeFileSync('joined.pdf', pdfBytes, {encoding: 'buffer'})