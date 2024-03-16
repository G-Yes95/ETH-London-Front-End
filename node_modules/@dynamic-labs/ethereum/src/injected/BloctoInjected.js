import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class BloctoInjected extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'bloctoInjected';
    }
}

export { BloctoInjected };
