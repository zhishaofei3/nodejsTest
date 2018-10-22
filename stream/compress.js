const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('xxx.pdf')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('xxx.pdf.gz'))

console.log("文件压缩完成")