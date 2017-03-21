//modules
const express = require('express'),
    path = require('path');

//methods
const app = express();

//routes
//don't need it

//middleware
//meh

//routing
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
