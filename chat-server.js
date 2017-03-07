const net = require('net')

const chatServer = net.createServer()
let clients = []

chatServer.on('connection', client => {
  client.name = `${client.remoteAddress}:${client.remotePort}`
  clients.push(client)
  client.write('Hi!\n')
  client.write('Bye!\n')

  client.on('data', data => {
    clients
      .filter(c => c !== client)
      .forEach(c => {
      c.write(client.name + " says " + data)
    })
  })

  client.on('end', () => {
    clients = [...clients.slice(0, clients.indexOf(client)), ...clients.slice(clients.indexOf(client) + 1)]
  })

})

chatServer.listen(9000)
