// Import things that we need
const express = require('express');
const bodyParser = require('body-parser');

// CONST
const PORT = 4400;
const PHONES = require('./phones.json');

// Import express into const app
const app = express();

// Apply json body parser
app.use(bodyParser.json());

// Routes
app.get('/phones', (req, res) => {
    res.send(PHONES);
});

// Listen
app.listen(PORT);