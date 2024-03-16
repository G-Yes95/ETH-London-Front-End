import InjectedWalletBase from './InjectedWalletBase.js';
import { filteredLegacyInjectedWalletKeys } from './legacyInjectedWallets.js';

const fetchInjectedWalletConnector = ({ walletBook, }) => {
    var _a;
    return Object.entries((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {})
        .filter(([key, wallet]) => {
        var _a;
        return ((_a = wallet.injectedConfig) === null || _a === void 0 ? void 0 : _a.find((config) => config.chain === 'evm')) &&
            !filteredLegacyInjectedWalletKeys.includes(key);
    })
        .map(([key, wallet]) => {
        const { shortName } = wallet;
        const name = shortName || wallet.name;
        const walletConnectorFallback = Boolean(wallet.walletConnect);
        return class extends InjectedWalletBase {
            constructor(props) {
                super(Object.assign({}, props));
                this.name = name;
                this.wallet = wallet;
                this.walletConnectorFallback = walletConnectorFallback;
                // this is the key from the wallet book entry so that we don't purely rely on the normalized name
                this.overrideKey = key;
            }
        };
    });
};

export { fetchInjectedWalletConnector };
