require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send(Array(16000).fill(0).map(x => Math.random().toString(36).charAt(2)).join(''));
})

app.listen(process.env.PORT);
