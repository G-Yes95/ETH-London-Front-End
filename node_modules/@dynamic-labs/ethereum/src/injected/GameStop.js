import LegacyInjectedWalletBase from './LegacyInjectedWalletBase.js';

class GameStop extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'GameStop';
    }
}

export { GameStop };
