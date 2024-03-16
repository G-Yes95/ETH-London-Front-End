'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Dawn extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Dawn';
    }
}

exports.Dawn = Dawn;
