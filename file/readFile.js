const fs = require('fs')

fs.readFile('log.txt', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log('异步读取:' + data.toString())
})

console.log('执行完毕')