const server = require('express')()
const bodyParser = require('body-parser')

server.use(bodyParser.json())

server.post('/users/:id', (req, res) => {
  const user = {
    username: req.body.username,
    id: req.params.id
  }
  res.json(user)
})

module.exports = server
