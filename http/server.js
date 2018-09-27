const http = require('http')
const url = require('url')

const hostname = '127.0.0.1'
const port = 3000

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return {unixtime: time.getTime()}
}

const server = http.createServer((req, res) => { //创建一个http服务器
  let parsedUrl = url.parse(req.url, true)
  let time = new Date(parsedUrl.query.iso)
  let result

  if (req.url == '/') {
    result = parsetime(new Date())
  }
  else if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  }
  else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`)
})


// request对象 获取客户端信息
// request.url 客户端请求的url地址
// request.headers 客户端请求的http header
// request.method 获取请求的方式，一般有几个选项，POST,GET和DELETE等，服务器可以根据客户端的不同请求方法进行不同的处理。
// request.httpVersion http的版本
// request.trailers 存放附加的一些http头信息
// request.socket 用于监听客户端请求的socket对象


// response对象 返回给客户端信息
// response.writeHead(statusCode, [reasonPhrase], [headers])
// response.statusCode html页面状态值
// response.header 返回的http header，可以是字符串，也可以是对象
// response.setTimeout(msecs, callback)设置http超时返回的时间，一旦超过了设定时间，连接就会被丢弃
// response.statusCode 设置返回的网页状态码
// response.setHeader(name, value)设置http协议头
// response.headersSent判断是否设置了http的头
// response.write(chunk, [encoding]) 返回的网页数据，[encoding] 默认是 utf-8
// response.end([data], [encoding])