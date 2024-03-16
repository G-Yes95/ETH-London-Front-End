'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class NoAccessError extends DynamicError.DynamicError {
    constructor({ walletPublicKey, email, }) {
        super('User does not have access');
        this.email = email;
        this.walletPublicKey = walletPublicKey;
    }
}

exports.NoAccessError = NoAccessError;
