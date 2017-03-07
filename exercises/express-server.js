// express server erstellen, der GET '/atlantec' mit 'finde das mal raus'
// beantwortet
const server = require('express')()

server.get('/atlantec', (req, res) => {
  res.write('finde das mal raus')
  res.end()
})

if (process.argv[2] === 3000) server.listen(3000)

module.exports = server
