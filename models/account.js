'use strict';
const InvalidValueException        = require('../exceptions/InvalidValueException');
const InsufficientBalanceException = require('../exceptions/InsufficientBalanceException');

module.exports = class Account {
    constructor() {
        this.balance = 0;
        this.maxLoan = 50;
    }

    toString() {
        return `Account balance: ${this.balance} MaxLoan allowed: ${this.maxLoan}`;
    }

    addBalance(value) {
        this.balance += value;
    }

    getBalance() {
        return this.balance;
    }

    withdraw(value) {
        if(value <= 0) {
            throw new InvalidValueException('You cannot withdraw negative values. ', value);
        } else if (this.balance - value < 0) {
            throw new InsufficientBalanceException('Not enough balance');
        }
        this.balance -= value;
    }
}