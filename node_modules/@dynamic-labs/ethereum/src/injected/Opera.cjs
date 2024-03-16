'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Opera extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Opera';
    }
}

exports.Opera = Opera;
