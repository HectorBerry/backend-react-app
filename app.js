// Import things that we need
const express = require('express');
const bodyParser = require('body-parser');

// CONST
const PORT = 3300;
const PHONES = require('./phones.json');

// Import express into const app
const app = express();

// MIDDLEWARE

// Apply json body parser
app.use(bodyParser.json());

// Add headers to let react app connect
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// Routes
app.get('/phones', (req, res) => {
    res.send(PHONES);
});

// Listen
app.listen(PORT);