// Dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });

const app = express();

const api = require('./routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist generate from Angular 
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch api calls
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Get port from environment
const port = process.env.PORT || '3000';
app.set('PORT', port);

// Create server
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});