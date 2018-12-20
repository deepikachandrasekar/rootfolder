/*
Author: Deepika Chandra Sekar
Description: Server.js file to start the app and load the files
*/


// Requiring express module
const express = require('express');
const app = express();
var path = require('path');
// Setting the port to run
const port = 3000
// Path the access the public files
app.use('/static', express.static(path.join(__dirname, 'src')))
// Path the access the web page
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// Starting the server at port 3000
app.listen(port)