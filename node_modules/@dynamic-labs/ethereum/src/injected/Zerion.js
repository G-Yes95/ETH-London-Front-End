import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Zerion extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Zerion';
        this.walletConnectorFallback = true;
    }
}

export { Zerion };
