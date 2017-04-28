//modules
const express = require('express'),
    path = require('path');

//methods
const app = express();

//routes
//don't need it

//middleware
//redirect http to https
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] == 'http') {
        return res.redirect(301, 'https://' + req.headers.host + '/');
    } else {
        return next();
    }
});

//routing
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
