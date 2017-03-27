'use strict';

// IMPORTS
let express      = require('express');
let bodyParser   = require('body-parser'); // Parse requested data
let http         = require('http');

// DECLARATIONS
let server = express();

// SERVER SETTINGS
server.set('port', process.env.PORT || 3000);
server.set('host', process.env.HOST || 'localhost');

// MIDDLEWARES
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

// ROUTES
let distributorRouter = require('./routes/v1/customerRouter')(server);

// SERVER
server.listen(server.get('port'));
console.log('Distribuidor running on http://' + server.get('host') + ':' + server.get('port') + '/api/distribuidor');