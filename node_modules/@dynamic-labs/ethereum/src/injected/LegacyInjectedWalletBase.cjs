'use strict';

var _tslib = require('../../_virtual/_tslib.cjs');
var viem = require('viem');
var walletBook = require('@dynamic-labs/wallet-book');
var legacyEthProviderHelper = require('../legacyEthProviderHelper.cjs');
var EthWalletConnector = require('../EthWalletConnector.cjs');
var walletConnectV2 = require('../walletConnect/walletConnectV2.cjs');
var walletConnect = require('../walletConnect/walletConnect.cjs');

class LegacyInjectedWalletBase extends EthWalletConnector.EthWalletConnector {
    constructor() {
        super(...arguments);
        this.supportedChains = ['ETH', 'EVM'];
        this.connectedChain = 'EVM';
        this.walletConnectorFallback = false;
    }
    getMobileOrInstalledWallet() {
        var _a, _b, _c;
        if (this.walletConnectorFallback && !this.isInstalledOnBrowser()) {
            const wallet = walletBook.getWalletBookWallet(this.walletBook, this.key);
            if (((_a = this.constructorProps) === null || _a === void 0 ? void 0 : _a.isWalletConnectV2Enabled) &&
                ((_c = (_b = wallet.walletConnect) === null || _b === void 0 ? void 0 : _b.sdks) === null || _c === void 0 ? void 0 : _c.includes('sign_v2'))) {
                return new walletConnectV2.WalletConnectV2(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
            else {
                return new walletConnect.WalletConnect(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
        }
        return this;
    }
    setupEventListeners() {
        const provider = legacyEthProviderHelper.LegacyEthProviderHelper.findProvider(this.name);
        if (!provider) {
            return;
        }
        const publicClient = viem.createPublicClient({ transport: viem.custom(provider) });
        const { tearDownEventListeners } = legacyEthProviderHelper.LegacyEthProviderHelper._setupEventListeners(this.name, this, publicClient);
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient() {
        return legacyEthProviderHelper.LegacyEthProviderHelper.findWalletClient(this.name);
    }
    isInstalledOnBrowser() {
        return legacyEthProviderHelper.LegacyEthProviderHelper.isInstalledHelper(this.name);
    }
    connect() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.fetchPublicAddress();
        });
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return legacyEthProviderHelper.LegacyEthProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return legacyEthProviderHelper.LegacyEthProviderHelper.signMessageWithName(messageToSign, this.name);
        });
    }
    proveOwnership(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return this.signMessage(messageToSign);
        });
    }
    endSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            // nothing to do on browser-based metamask
            return;
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        const _super = Object.create(null, {
            providerSwitchNetwork: { get: () => super.providerSwitchNetwork }
        });
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return _super.providerSwitchNetwork.call(this, { network, provider });
        });
    }
}

module.exports = LegacyInjectedWalletBase;
