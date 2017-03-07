'use strict'

const fs = require('fs')

function firstIo(filepath) {
  const file = fs.readFileSync(filepath)
  return file.toString().split('\n').length
}

module.exports = firstIo
