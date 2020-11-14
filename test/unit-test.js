const request = require('supertest')
const app = require('../app')


describe('GET "/items"', () => {
    it('respond with list of items', (done) => {
        let want = [
            { id: 1, name: 'Entreprenuer'},
            { id: 2, name: 'DevOps'}
        ]

        request(app).get('/items').expect(want, done)
    })
})
