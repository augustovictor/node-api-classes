'use strict';
const customerRouter = (server) => {
    const customerController = require.main.require('./controllers/customerController') ;
    const PATH = '/api';
    server.get(PATH + '/customers', customerController.getAllCustomers);
    server.post(PATH + '/customers/new', customerController.newCustomer);
    server.post(PATH + '/customers/withdraw', customerController.withdraw);
    return server;
};

module.exports = customerRouter;