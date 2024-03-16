import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class Frame extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Frame';
    }
}

export { Frame };
