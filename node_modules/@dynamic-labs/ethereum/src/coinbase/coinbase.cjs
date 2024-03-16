'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var viem = require('viem');
var EthWalletConnector = require('../EthWalletConnector.cjs');
var legacyEthProviderHelper = require('../legacyEthProviderHelper.cjs');
var client = require('./client/client.cjs');

class Coinbase extends EthWalletConnector.EthWalletConnector {
    constructor(_a) {
        var { appName, appLogoUrl, evmNetworks } = _a, props = _tslib.__rest(_a, ["appName", "appLogoUrl", "evmNetworks"]);
        super(Object.assign({ evmNetworks }, props));
        this.name = 'Coinbase';
        this.supportedChains = ['EVM', 'ETH'];
        this.connectedChain = 'EVM';
        this.canConnectViaQrCode = true;
        this.coinbaseProviderOpts = {
            appLogoUrl: appLogoUrl,
            appName: appName,
            evmNetworks: evmNetworks,
        };
    }
    setupEventListeners() {
        const provider = legacyEthProviderHelper.LegacyEthProviderHelper.findProvider(this.name);
        if (!provider) {
            return;
        }
        const { tearDownEventListeners } = legacyEthProviderHelper.LegacyEthProviderHelper._setupEventListeners(this.name, this, viem.createPublicClient({ transport: viem.custom(provider) }));
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient() {
        if (this.isInstalledOnBrowser()) {
            return legacyEthProviderHelper.LegacyEthProviderHelper.findWalletClient(this.name);
        }
        return viem.createWalletClient({
            transport: viem.custom(client.getCoinbaseProvider({
                opts: this.coinbaseProviderOpts,
            })),
        });
    }
    isInstalledOnBrowser() {
        return legacyEthProviderHelper.LegacyEthProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress(opts) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return legacyEthProviderHelper.LegacyEthProviderHelper.fetchPublicAddressWithName(this.name);
            }
            return client.fetchPublicAddress(this.coinbaseProviderOpts, opts);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return legacyEthProviderHelper.LegacyEthProviderHelper.signMessageWithName(messageToSign, this.name);
            }
            return client.signMessage(this.coinbaseProviderOpts, messageToSign);
        });
    }
    endSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser())
                return;
            client.killCoinbaseSession();
        });
    }
}

exports.Coinbase = Coinbase;
