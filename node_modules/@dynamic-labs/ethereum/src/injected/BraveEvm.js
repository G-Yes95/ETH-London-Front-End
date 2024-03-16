import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class BraveEvm extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BraveEvm';
    }
}

export { BraveEvm };
