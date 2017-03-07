const aio = require('../exercises/async-io')

describe('aufgabe 3', () => {
  it('sollte auch die richtige anzahl ausgeben, aber async arbeiten', done => {
    function cb(lines) {
      expect(lines).toEqual(7)
      done()
    }
    aio(__dirname + '/files/first-io.txt', cb)
  })
})
