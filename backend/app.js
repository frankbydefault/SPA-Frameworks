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



// Rutes Prefix / load routes
app.use('/', article_routes);


//Export Modules
module.exports = app;