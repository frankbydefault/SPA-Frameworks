'use strict'

//Node Modules for Server Creation
const express = require('express');
const bodyParser = require('body-parser');

//Exe Express (http)
const app = express();


//Rutes
let article_routes = require('./routes/article-route');


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutes Prefix / load routes
app.use('/api', article_routes);


//Export Modules
module.exports = app;