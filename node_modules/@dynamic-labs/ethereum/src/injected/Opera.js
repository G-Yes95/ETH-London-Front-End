import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Opera extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Opera';
    }
}

export { Opera };
