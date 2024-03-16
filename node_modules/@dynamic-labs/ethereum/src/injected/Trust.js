import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Trust extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Trust';
        this.walletConnectorFallback = true;
    }
}

export { Trust };
