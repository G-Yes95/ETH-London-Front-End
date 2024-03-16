'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var walletSdk = require('@coinbase/wallet-sdk');
var viem = require('viem');
var utils = require('@dynamic-labs/utils');
var constants = require('../../constants.cjs');

const jsonRpcUrl = `https://mainnet.infura.io/v3/${constants.INFURA_ID}`;
const chainId = 1;
let coinbaseProvider;
const getCoinbaseProvider = ({ opts: { appLogoUrl, appName = '', evmNetworks = [] } = {}, handlers, }) => {
    var _a, _b;
    if (!coinbaseProvider) {
        const coinbaseWalletSDK = new walletSdk.CoinbaseWalletSDK({
            appLogoUrl,
            appName,
            eventListener: {
                onEvent: (eventType) => {
                    if (eventType === 'walletlink_sdk.disconnected') {
                        handlers === null || handlers === void 0 ? void 0 : handlers.onDisconnect();
                    }
                },
            },
            headlessMode: true,
            reloadOnDisconnect: false,
        });
        const network = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((network) => network.chainId === chainId);
        const rpcUrl = ((_a = network === null || network === void 0 ? void 0 : network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) ||
            ((_b = network === null || network === void 0 ? void 0 : network.rpcUrls) === null || _b === void 0 ? void 0 : _b[0]) ||
            jsonRpcUrl;
        coinbaseProvider = coinbaseWalletSDK.makeWeb3Provider(rpcUrl, chainId);
    }
    return coinbaseProvider;
};
const killCoinbaseSession = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    yield (coinbaseProvider === null || coinbaseProvider === void 0 ? void 0 : coinbaseProvider.close());
    coinbaseProvider === null || coinbaseProvider === void 0 ? void 0 : coinbaseProvider.disconnect();
    // We needed to remove the provider, because after a disconnect the initial settings that
    // were set in the SDK reset, and they need to be initialized again.
    coinbaseProvider = undefined;
});
const fetchPublicAddress = (coinbaseProviderOpts, opts) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const provider = getCoinbaseProvider({ opts: coinbaseProviderOpts });
    const { qrUrl } = provider;
    if (!qrUrl) {
        throw new utils.DynamicError('no qr url available');
    }
    (_a = opts === null || opts === void 0 ? void 0 : opts.onDisplayUri) === null || _a === void 0 ? void 0 : _a.call(opts, qrUrl);
    const [address] = yield provider.request({
        method: 'eth_requestAccounts',
    });
    return address;
});
const signMessage = (coinbaseProviderOpts, messageToSign) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const provider = getCoinbaseProvider({ opts: coinbaseProviderOpts });
    const [address] = yield provider.request({
        method: 'eth_requestAccounts',
    });
    try {
        return yield provider.request({
            method: 'personal_sign',
            params: [viem.toHex(viem.toBytes(messageToSign)), address.toLowerCase()],
        });
    }
    catch (err) {
        yield provider.close();
        return undefined;
    }
});

exports.fetchPublicAddress = fetchPublicAddress;
exports.getCoinbaseProvider = getCoinbaseProvider;
exports.killCoinbaseSession = killCoinbaseSession;
exports.signMessage = signMessage;
