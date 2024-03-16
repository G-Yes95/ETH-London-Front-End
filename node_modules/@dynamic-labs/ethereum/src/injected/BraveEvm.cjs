'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class BraveEvm extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BraveEvm';
    }
}

exports.BraveEvm = BraveEvm;
