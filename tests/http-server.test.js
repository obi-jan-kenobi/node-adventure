const s = require('../exercises/http-server')
const request = require('supertest')

describe('aufgabe 4', () => {
  it('sollte hello world im browser ausgeben', done => {
    return request(s)
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('hello world')
      })
  })
})
