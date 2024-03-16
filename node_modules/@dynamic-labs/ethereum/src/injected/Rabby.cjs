'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Rabby extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Rabby';
        this.walletConnectorFallback = true;
    }
}

exports.Rabby = Rabby;
