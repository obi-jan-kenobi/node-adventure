const jserv = require('../exercises/json-server')
const request = require('supertest')

describe('aufgabe 6', () => {
  it('sollte die id des users als json zurückgeben', done => {
    const id = Math.floor(Math.random() * (3000 - 1)) + 1;
    request(jserv)
      .post('/users/' + id)
      .send({username: 'obi-jan-kenobi', id})
      .expect(200)
      .end((err, res) => {
        expect(res.body).toEqual({
          username: 'obi-jan-kenobi',
          id: id + ""
        })
        done()
      })
  })
})
