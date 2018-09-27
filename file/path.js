var path = require('path')

console.log(path.basename('C:\\temp\\myfile.html'))

console.log(path.win32.basename('C:\\temp\\myfile.html'))

console.log(path.posix.basename('/tmp/myfile.html'))

console.log(path.basename('/foo/bar/baz/asdf/quux.html'))

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'))

console.log(process.env.PATH)

console.log(process.env.PATH.split(path.delimiter))

console.log(path.dirname('/foo/bar/baz/asdf/quux'))

console.log(path.extname('index.html'))
console.log(path.extname('index.coffee.md'))
console.log(path.extname('index.'))
console.log(path.extname('index'))
console.log(path.extname('.index'))


console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
}))


console.log(path.format({
  name: 'file',
  ext: '.txt'
}))

console.log(path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
}))

console.log(path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
}))

console.log(path.isAbsolute('/foo/bar'))
console.log(path.isAbsolute('/baz/..'))
console.log(path.isAbsolute('qux/'))
console.log(path.isAbsolute('.'))

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))

console.log(path.parse('/home/user/dir/file.txt'))
console.log(path.win32.parse('C:\\path\\dir\\file.txt'))
console.log(path.win32.relative('c:\\sa\\s', 'c:\\sa'))
console.log(path.resolve('/foo/bar', './baz'))

console.log('foo/bar/baz'.split(path.sep))
