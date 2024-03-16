'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class ExodusEvm extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'ExodusEvm';
        this.walletConnectorFallback = true;
    }
}

exports.ExodusEvm = ExodusEvm;
