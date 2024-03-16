'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class GameStop extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'GameStop';
    }
}

exports.GameStop = GameStop;
