var querystring = require('querystring')
var url = require('url')

var r = querystring.parse('foo=bar&baz=qux&baz=quux&corge')
console.log(r)
console.log(r.foo)

var r2 = querystring.parse('foo*bar@baz*qux@baz*quux@corge', '@', '*') // 第二个参数替代& 第三个参数替代=
console.log(r2)

var r3 = querystring.parse('foo*bar@baz*qux@baz*quux@corge', '@', '*', {maxKeys: 2}) // 第三个参数是一个对象 最多取多少个值
console.log(r3)

var jd = url.parse('https://www.jd.com/?cu=true&utm_source=click.linktech.cn&utm_medium=tuiguang&utm_campaign=t_4_A100233028&utm_term=d2c836b3377f40629223ce5a10743c8b')
console.log(jd)
console.log(jd.query, typeof jd.query) // string

var jd2 = url.parse('https://www.jd.com/?cu=true&utm_source=click.linktech.cn&utm_medium=tuiguang&utm_campaign=t_4_A100233028&utm_term=d2c836b3377f40629223ce5a10743c8b', true)
console.log(jd2.query.utm_source, typeof jd2.query) // object



// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                                    href                                     │
// ├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
// │ protocol ││   auth    │      host       │           path            │ hash  │
// │          ││           ├──────────┬──────┼──────────┬────────────────┤       │
// │          ││           │ hostname │ port │ pathname │     search     │       │
// │          ││           │          │      │          ├─┬──────────────┤       │
// │          ││           │          │      │          │ │    query     │       │
// "  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          ││           │          │      │          │ │              │       │
// └──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘