'use strict';

const express = require('express');
const { mongoose } = require('./database');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

//App
const server = express();

//Middleware
server.use(express.json());

//Settings
server.set('port', process.env.PORT || PORT)

//Routes
server.get('/', (req, res) => {
  res.send('Hello world\n');
});

//Starting server
server.listen(server.get('port'), HOST);
console.log(`Running on http://${HOST}:${PORT}`);