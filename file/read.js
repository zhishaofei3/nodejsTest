const fs = require('fs')
let buf = new Buffer(1024)

fs.open('log.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err)
  }
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) {
      console.error(err)
    }
    console.log(bytes + ' 字节被读取')
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }
  })
})

// utf8下 1汉字为3字节