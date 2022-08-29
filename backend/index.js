'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest', { useNewUrlParser: true })
    .then(() => {
        console.log('DB Connection Success!');

        //Server creation

        app.listen(port, () => {
            console.log('Server runnig at http://localhost:' + port);
        });

    });

