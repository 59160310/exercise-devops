const request = require('supertest')
const app = require('../app')

describe('GET "/"', () =>{
    it('respond with hello world', (done) => {
        request(app).get('/').expect('Hello world', done)
    })
})

describe('GET "/items"', () => {
    it('respond with list of items', (done) => {
        let want = [
            { id: 1, name: 'Entreprenuer'},
            { id: 2, name: 'DevOps'}
        ]

        request(app).get('/items').expect(want, done)
    })
})
