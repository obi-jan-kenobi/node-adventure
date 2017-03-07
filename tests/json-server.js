const jserv = require('../exercises/json-server')
const request = require('supertest')

describe('aufgabe 6', () => {
  it('sollte die id des users als json zurückgeben',  => {
    const id = Math.floor(Math.random() * (3000 - 1)) + 1;
    return request(jserv)
      .get('/users/' + id)
      .expect(200)
      .end((err, res) => {
        expect(res.body).toEqual({
          user: id
        })
        done()
      })
  })
})
