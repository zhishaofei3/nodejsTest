const fs = require('fs')

let pathname = {
  src: './stream/img.jpg',
  dist: './stream/copy.jpg'
}

// 不用流的实现方法
// const fs = require('fs')
// const file = fs.readFileSync('./README.md', {encoding: 'utf8'})
// fs.writeFileSync('./TEST.md', file)

let ReadStream = fs.createReadStream(pathname.src)
console.log('ReadStream', ReadStream)
let WriteStream = fs.createWriteStream(pathname.dist)

ReadStream.pipe(WriteStream)

// 复制完成触发的事件
WriteStream.on('finish', () => {
  console.log('复制完成')
})