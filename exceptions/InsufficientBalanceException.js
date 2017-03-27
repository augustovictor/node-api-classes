'use strict';

module.exports = class InsufficientBalanceException extends Error {
    constructor(message, extra) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name            = this.constructor.name;
        this.message         = message;
        if(extra) this.extra = extra;
    }
}