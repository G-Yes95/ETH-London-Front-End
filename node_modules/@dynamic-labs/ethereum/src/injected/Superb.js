import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Superb extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Superb';
    }
}

export { Superb };
