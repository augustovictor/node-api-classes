'use strict';
const customerRouter = (server) => {
    const customerController = require('../../controllers/customerController') ;
    const PATH = '/api';
    server.get(PATH + '/customers', customerController.getAllCustomers);
    server.post(PATH + '/customers/new', customerController.newCustomer);
    return server;
};

module.exports = customerRouter;