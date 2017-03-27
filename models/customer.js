'use strict';

module.exports = class Customer {
    constructor(name, lastname) {
        this.name     = name;
        this.lastname = lastname;
    }

    toString() {
        return `Customer: ${this.name} ${this.lastname}`;
    }
    
}