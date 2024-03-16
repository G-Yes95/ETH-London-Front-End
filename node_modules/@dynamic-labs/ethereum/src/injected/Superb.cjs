'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Superb extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Superb';
    }
}

exports.Superb = Superb;
