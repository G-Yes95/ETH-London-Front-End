'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class BloctoInjected extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'bloctoInjected';
    }
}

exports.BloctoInjected = BloctoInjected;
