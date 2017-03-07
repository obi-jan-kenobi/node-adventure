// ihr bekommt nen callback, der mit der anzahl der lines im file
// aufgerufen werden soll, sobald das file async gelesen wurde.
const fs = require('fs')

function asyncIo(filepath, cb) {
  fs.readFile(filepath, 'utf-8' , (err, data) => {
    if (data)
      cb(data.toString().split('\n').length)
  })
}

module.exports = asyncIo
