'use strict';
const Customer = require('../models/customer');
const Account  = require('../models/account');

module.exports.getAllCustomers = (req, res, next) => {
    res.status(200).send({customers: []});
    return next();
};

module.exports.newCustomer = (req, res, next) => {
    let customer = new Customer(req.body['name'], req.body['lastname']);
    console.log(customer);
    res.status(200).send({customer: customer.toString()});

    return next();
};

module.exports.withdraw = (req, res, next) => {
    let customer = new Customer(req.body['name'], req.body['lastname']);
    let acc = new Account();
    customer.acc = acc;
    customer.acc.addBalance(5);
    try {
        customer.acc.withdraw(req.body['value']);
        res.status(200);
        res.send({msg: 'operation ok', newBalance: customer.acc.getBalance()});
    } catch(err) {
        res.status(400);
        res.send({err: err});
    }

    return next();

};