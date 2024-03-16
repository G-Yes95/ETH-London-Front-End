'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Trust extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Trust';
        this.walletConnectorFallback = true;
    }
}

exports.Trust = Trust;
