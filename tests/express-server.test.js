const eserv = require('../exercises/express-server')
const request = require('supertest')

describe('aufgabe 5', () => {
  it('sollte bei aufruf von /atlantec "finde das mal raus" antworten', done => {
    return request(eserv)
      .get('/atlantec')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toEqual('finde das mal raus')
        done()
      })
  })
})
