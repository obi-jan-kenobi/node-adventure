const fio = require('../exercises/first-io.js')

describe('aufgabe 2', () => {
  it('sollte die richtige anzahl an zeilen ausgeben', () => {
    expect(fio(__dirname + '/files/first-io.txt')).toEqual(7)
  })
})
