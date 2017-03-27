'use strict';
const Customer = require('../models/customer');

module.exports.getAllCustomers = (req, res, next) => {
    res.status(200).send({customers: []});
    return next();
};

module.exports.newCustomer = (req, res, next) => {
    let customer = new Customer(req.body.name, req.body.lastname);
    console.log(customer);
    res.status(200).send({customer: customer.toString()});

    return next();
};