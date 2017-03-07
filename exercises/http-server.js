const http = require('http')

const server = http.createServer((req, res) => {
  res.write('hello world')
  res.end()
})

if (process.argv[2] == 3000) server.listen(3000)

module.exports = server
