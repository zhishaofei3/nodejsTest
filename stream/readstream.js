const fs = require("fs")

let data = ''
let readerStream = fs.createReadStream('../README.md')

readerStream.setEncoding('UTF8')

readerStream.on('data', (chunk) => {
  data += chunk
})

readerStream.on('end', () => {
  console.log(data)
})

readerStream.on('error', (err) => {
  console.log(err.stack)
})

console.log('执行完毕')
