//modules
const express = require('express'),
    path = require('path');

//methods
const app = express();

//routes
//don't need it

//middleware
//redirect http to https
app.all('*', (req, res, next) => {
  return req.secure ? next : res.redirect('https://' + req.hostname + req.url);
})

//routing
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
