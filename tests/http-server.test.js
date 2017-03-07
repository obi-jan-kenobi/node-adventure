const s = require('../exercises/http-server')
const request = require('supertest')

describe('aufgabe 4', () => {
  it('sollte hello world im browser ausgeben', done => {
    it('sollte hello world im browser ausgeben', done => {
      return request(s)
        .get('/')
        .expect(200)
        .end((err, res) => {
          expect(res.text).toEqual('hello world')
          done()
        })
    })
  })
})
