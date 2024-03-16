'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class Frame extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Frame';
    }
}

exports.Frame = Frame;
