import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class ExodusEvm extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'ExodusEvm';
        this.walletConnectorFallback = true;
    }
}

export { ExodusEvm };
