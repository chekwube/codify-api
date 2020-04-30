var express = require('express');
var app = express();
var morgan = require('morgan');
require('dotenv').config();
var compression = require('compression');
var tutorial = require('./src/api/tutorial.js')
var cors = require('cors');

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/tutorial', tutorial);


app.all('*', (req, res) => res.status(404).send({ message: 'Resource not found' }));

module.exports = app;