'use strict';

var _tslib = require('../../_virtual/_tslib.cjs');
var viem = require('viem');
var walletBook = require('@dynamic-labs/wallet-book');
var ethProviderHelper = require('../ethProviderHelper.cjs');
var EthWalletConnector = require('../EthWalletConnector.cjs');
var walletConnectV2 = require('../walletConnect/walletConnectV2.cjs');
var walletConnect = require('../walletConnect/walletConnect.cjs');

class InjectedWalletBase extends EthWalletConnector.EthWalletConnector {
    constructor() {
        super(...arguments);
        this.supportedChains = ['ETH', 'EVM'];
        this.connectedChain = 'EVM';
        this.walletConnectorFallback = false;
    }
    getEthProviderHelper() {
        if (!this.wallet) {
            this.wallet = walletBook.getWalletBookWallet(this.walletBook, this.key);
        }
        if (this.wallet && !this.ethProviderHelper) {
            this.ethProviderHelper = new ethProviderHelper.EthProviderHelper(this.wallet);
        }
        return this.ethProviderHelper;
    }
    getMobileOrInstalledWallet() {
        var _a, _b, _c;
        if (this.walletConnectorFallback && !this.isInstalledOnBrowser()) {
            if (!this.wallet)
                this.wallet = walletBook.getWalletBookWallet(this.walletBook, this.key);
            if (((_a = this.constructorProps) === null || _a === void 0 ? void 0 : _a.isWalletConnectV2Enabled) &&
                ((_c = (_b = this.wallet.walletConnect) === null || _b === void 0 ? void 0 : _b.sdks) === null || _c === void 0 ? void 0 : _c.includes('sign_v2'))) {
                return new walletConnectV2.WalletConnectV2(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
            else {
                return new walletConnect.WalletConnect(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
        }
        return this;
    }
    setupEventListeners() {
        const provider = this.getWalletClient();
        if (!provider)
            return;
        const ethProviderHelper = this.getEthProviderHelper();
        if (!ethProviderHelper)
            return;
        const { tearDownEventListeners } = ethProviderHelper._setupEventListeners(this, viem.createPublicClient({ transport: viem.custom(provider) }));
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient() {
        var _a;
        return (_a = this.getEthProviderHelper()) === null || _a === void 0 ? void 0 : _a.findWalletClient();
    }
    isInstalledOnBrowser() {
        var _a;
        return ((_a = this.getEthProviderHelper()) === null || _a === void 0 ? void 0 : _a.findProvider()) !== undefined;
    }
    fetchPublicAddress() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (_a = this.getEthProviderHelper()) === null || _a === void 0 ? void 0 : _a.fetchPublicAddress();
        });
    }
    connect() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.fetchPublicAddress();
        });
    }
    signMessage(messageToSign) {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (_a = this.getEthProviderHelper()) === null || _a === void 0 ? void 0 : _a.signMessage(messageToSign);
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

module.exports = InjectedWalletBase;
