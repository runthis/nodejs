require('dotenv').config()
const express = require('express')
const app = express()

const longString = Array(16000).fill(0).map(x => Math.random().toString(36).charAt(2)).join('');

app.get('/', async (req, res) => {
    res.send(longString)
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
