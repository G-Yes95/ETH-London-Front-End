import { __awaiter } from '../_virtual/_tslib.js';
import { createWalletClient, custom, getAddress } from 'viem';
import { ProviderLookup, normalizeWalletName, logger } from '@dynamic-labs/wallet-connector-core';
import { isUnsupportedProviderError } from './utils/isUnsupportedProviderError/isUnsupportedProviderError.js';
import { eventListenerHandlers } from './utils/eventListenerHandlers.js';

var _a;
class LegacyEthProviderHelper {
    static installedProviderLookup(providerFlags) {
        const allInstalledProviders = this.allInstalledProviders();
        return ProviderLookup(allInstalledProviders, providerFlags);
    }
    static allInstalledProviders() {
        var _b;
        const ethereumProviders = [];
        if (window.ethereum) {
            if (!window.ethereum.providers) {
                ethereumProviders.push(window.ethereum);
            }
            else {
                window.ethereum.providers.forEach((provider) => {
                    ethereumProviders.push(provider);
                });
            }
        }
        if ((_b = window.phantom) === null || _b === void 0 ? void 0 : _b.ethereum) {
            ethereumProviders.push(window.phantom.ethereum);
        }
        if (window.zerionWallet) {
            ethereumProviders.push(window.zerionWallet);
        }
        if (window.coinbaseWalletExtension) {
            ethereumProviders.push(window.coinbaseWalletExtension);
        }
        if (window.superb) {
            ethereumProviders.push(window.superb);
        }
        return ethereumProviders;
    }
    static isInstalledHelper(walletName) {
        return this.findProvider(walletName) !== undefined;
    }
    static findProvider(walletName) {
        var _b, _c;
        try {
            return (_c = (_b = this.providers)[normalizeWalletName(walletName)]) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
        catch (err) {
            if (isUnsupportedProviderError(err)) {
                logger.error(`ETH Provider is not supported ${err.value}`, err);
                return;
            }
            logger.error(`Could not find provider for ${walletName}`, err);
            return undefined;
        }
    }
    static findWalletClient(walletName) {
        const provider = this.findProvider(walletName);
        if (!provider) {
            return undefined;
        }
        return createWalletClient({
            transport: custom(provider),
        });
    }
    static fetchPublicAddressWithName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.findWalletClient(name);
            if (!client) {
                return Promise.resolve(undefined);
            }
            return this.fetchPublicAddressWithProvider(client);
        });
    }
    static fetchPublicAddressWithProvider(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [lowercaseAddress] = yield client.requestAddresses();
                const publicAddress = getAddress(lowercaseAddress);
                return publicAddress;
            }
            catch (err) {
                logger.error(err);
                return Promise.reject(err);
            }
        });
    }
    static signMessageWithName(messageToSign, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddressWithName(name);
            if (!walletAddress) {
                return Promise.resolve(undefined);
            }
            const client = this.findWalletClient(name);
            if (!client) {
                return Promise.resolve(undefined);
            }
            const signedMessage = yield client.signMessage({
                account: walletAddress,
                message: messageToSign,
            });
            return signedMessage;
        });
    }
    static _setupEventListeners(walletName, walletConnector, publicClient) {
        const web3Provider = this.findProvider(walletName);
        if (!web3Provider) {
            return {
                tearDownEventListeners: () => { },
            };
        }
        const { handleAccountChange, handleChainChange, handleDisconnect } = eventListenerHandlers(walletConnector, publicClient);
        web3Provider.on('accountsChanged', handleAccountChange);
        web3Provider.on('chainChanged', handleChainChange);
        web3Provider.on('disconnect', handleDisconnect);
        const tearDownEventListeners = () => {
            const web3Provider = this.findProvider(walletName);
            if (!web3Provider) {
                return;
            }
            if (handleAccountChange) {
                web3Provider.removeListener('accountsChanged', handleAccountChange);
            }
            if (handleChainChange) {
                web3Provider.removeListener('chainChanged', handleChainChange);
            }
            if (handleDisconnect) {
                web3Provider.removeListener('disconnect', handleDisconnect);
            }
        };
        return {
            tearDownEventListeners,
        };
    }
}
_a = LegacyEthProviderHelper;
LegacyEthProviderHelper.BraveProvider = () => _a.installedProviderLookup([{ flag: 'isBraveWallet', value: true }]);
LegacyEthProviderHelper.DawnProvider = () => _a.installedProviderLookup([{ flag: 'isDawn', value: true }]);
LegacyEthProviderHelper.FrameProvider = () => _a.installedProviderLookup([{ flag: 'isFrame', value: true }]);
LegacyEthProviderHelper.CoinbaseProvider = () => _a.installedProviderLookup([{ flag: 'isCoinbaseWallet', value: true }]);
LegacyEthProviderHelper.OperaProvider = () => _a.installedProviderLookup([{ flag: 'isOpera', value: true }]);
LegacyEthProviderHelper.GameStopProvider = () => _a.installedProviderLookup([{ flag: 'isGamestop', value: true }]);
LegacyEthProviderHelper.ExodusProvider = () => _a.installedProviderLookup([{ flag: 'isExodus', value: true }]);
LegacyEthProviderHelper.BloctoProvider = () => _a.installedProviderLookup([{ flag: 'isBlocto', value: true }]);
LegacyEthProviderHelper.TrustWalletProvider = () => _a.installedProviderLookup([{ flag: 'isTrustWallet', value: true }]);
LegacyEthProviderHelper.PhantomProvider = () => _a.installedProviderLookup([{ flag: 'isPhantom', value: true }]);
LegacyEthProviderHelper.ZerionProvider = () => _a.installedProviderLookup([{ flag: 'isZerion', value: true }]);
LegacyEthProviderHelper.SuperbProvider = () => _a.installedProviderLookup([{ flag: 'isSuperb', value: true }]);
LegacyEthProviderHelper.RabbyProvider = () => _a.installedProviderLookup([{ flag: 'isRabby', value: true }]);
LegacyEthProviderHelper.OKXProvider = () => _a.installedProviderLookup([{ flag: 'isOkxWallet', value: true }]);
LegacyEthProviderHelper.UnknownInjectedProvider = () => _a.installedProviderLookup([
    { flag: 'isMetaMask', value: false },
    { flag: 'isExodus', value: false },
    { flag: 'isCoinbaseWallet', value: false },
    { flag: 'isBraveWallet', value: false },
    { flag: 'isGamestop', value: false },
    { flag: 'isFrame', value: false },
    { flag: 'isOpera', value: false },
    { flag: 'isBlocto', value: false },
    { flag: 'isTrustWallet', value: false },
    { flag: 'isPhantom', value: false },
    { flag: 'isZerion', value: false },
    { flag: 'isSuperb', value: false },
    { flag: 'isRabby', value: false },
]);
LegacyEthProviderHelper.providers = {
    bloctoinjected: _a.BloctoProvider,
    braveevm: _a.BraveProvider,
    coinbase: _a.CoinbaseProvider,
    dawn: _a.DawnProvider,
    exodusevm: _a.ExodusProvider,
    frame: _a.FrameProvider,
    gamestop: _a.GameStopProvider,
    injectedwallet: _a.UnknownInjectedProvider,
    opera: _a.OperaProvider,
    phantomevm: _a.PhantomProvider,
    rabby: _a.RabbyProvider,
    superb: _a.SuperbProvider,
    trust: _a.TrustWalletProvider,
    zerion: _a.ZerionProvider,
};

export { LegacyEthProviderHelper };
