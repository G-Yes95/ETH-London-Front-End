'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Zerion extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Zerion';
        this.walletConnectorFallback = true;
    }
}

exports.Zerion = Zerion;
