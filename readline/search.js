const http = require('http')
const cheerio = require('cheerio')
const readline = require('readline')

function search(words, callback) { // es6默认参数
  let options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: `/s?wd=${encodeURI(words)}`,
    method: 'GET'
  }

  const req = http.request(options, (res) => {
    // console.log(`STATUS: ${res.statusCode}`) //返回状态码
    // console.log(`HEADERS: ${JSON.stringify(res.headers, null, 4)}`) // 返回头部
    res.setEncoding('utf8') // 设置编码
    let body = ''
    res.on('data', (chunk) => { //监听 'data' 事件
      body += chunk
    })
    res.on('end', () => {
      let $ = cheerio.load(body)
      $('.t a').each(function (i, el) {
        console.log($(this).text(), $(this).attr('href'), '\n')
      })
      callback()
    })
  })
  req.end() // end方法结束请求
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', (line) => {
  console.log('zsf line', line.trim())
  search(line.trim(), () => {
    rl.prompt()
  })
}).on('close', () => {
  console.log('再见!')
  process.exit(0)
})