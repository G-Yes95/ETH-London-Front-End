import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Rabby extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Rabby';
        this.walletConnectorFallback = true;
    }
}

export { Rabby };
