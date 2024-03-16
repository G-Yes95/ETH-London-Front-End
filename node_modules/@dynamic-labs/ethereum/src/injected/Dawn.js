import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Dawn extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Dawn';
    }
}

export { Dawn };
