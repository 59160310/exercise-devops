const express = require('express')
const app = express()
const port = 3000

let items = [
    { id: 1, name: 'Entreprenuer'},
    { id: 2, name: 'DevOps'}
]

app.get('/', (req, res) => {
    res.send('Hello world')
})

function getItems() {
    return items
}

app.get('/items', (req, res) => {
    res.json(getItems())
})

module.exports = app