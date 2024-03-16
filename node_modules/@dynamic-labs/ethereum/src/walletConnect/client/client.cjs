'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var Client = require('@walletconnect/client');
var viem = require('viem');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Client__default = /*#__PURE__*/_interopDefaultLegacy(Client);

const initClient = (name, bridge, settings) => {
    const storageId = `walletconnect-${name}`;
    const session = localStorage.getItem(storageId);
    const clientArgs = session
        ? { session: JSON.parse(session), storageId }
        : { bridge, storageId };
    return new Client__default["default"](Object.assign(Object.assign({}, clientArgs), settings));
};
/**
 * Attach event handlers to WalletConnect events.
 */
const setupWalletConnectEventListeners = (walletConnector, client) => {
    if (!client) {
        return;
    }
    let prevAccount;
    let prevChain;
    if (client.connected) {
        // eslint-disable-next-line prefer-destructuring
        prevAccount = client.accounts[0];
        prevChain = client.chainId;
    }
    client.on('disconnect', () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        walletConnector.emit('disconnect');
    }));
    client.on('session_update', (_, payload) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        // eslint-disable-next-line prefer-destructuring
        const { accounts, chainId } = payload.params[0];
        const didAccountChange = !walletConnectorCore.isSameAddress(prevAccount || '', accounts[0], 'eip155');
        const didChainChange = prevChain !== chainId;
        // eslint-disable-next-line prefer-destructuring
        prevAccount = accounts[0];
        prevChain = chainId;
        if (didAccountChange) {
            walletConnector.emit('accountChange', { accounts });
        }
        if (didChainChange) {
            walletConnector.emit('chainChange', { chain: String(chainId) });
        }
    }));
};
const teardownWalletConnectEventListeners = (client) => {
    client.off('disconnect');
    client.off('session_update');
};
/**
 * Initialize a client from a stored session and terminate the connection.
 */
const killWalletConnectSession = (client) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (client === null || client === void 0 ? void 0 : client.connected) {
            yield client.killSession();
        }
    }
    catch (e) {
        walletConnectorCore.logger.debug(e);
    }
});
const createSession = (client) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        client.on('connect', (error, payload) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (error)
                throw error;
            resolve(payload);
        }));
        client.on('disconnect', (error, payload) => {
            reject(error || payload.params[0].message);
        });
    });
});
const fetchWalletConnectEVMPublicAddress = (metadata, wcClient, deepLinkPreference, opts) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (wcClient.connected) {
        const [accountPublicAddress] = wcClient.accounts;
        return accountPublicAddress;
    }
    // createSession will trigger the QR code...
    yield wcClient.createSession();
    walletConnectorCore.performPlatformSpecificConnectionMethod(wcClient.uri, metadata, {
        onDesktopUri: opts === null || opts === void 0 ? void 0 : opts.onDesktopUri,
        onDisplayUri: opts === null || opts === void 0 ? void 0 : opts.onDisplayUri,
    }, deepLinkPreference);
    const payload = yield createSession(wcClient);
    (_a = opts === null || opts === void 0 ? void 0 : opts.onConnect) === null || _a === void 0 ? void 0 : _a.call(opts, payload);
    const [accountPublicAddress] = payload.params[0].accounts;
    return accountPublicAddress;
});
const signWalletConnectPersonalMessage = (messageToSign, metadata, client, deepLinkPreference, rpcProvider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const isCryptoWallet = ((_b = client === null || client === void 0 ? void 0 : client.peerMeta) === null || _b === void 0 ? void 0 : _b.name) === 'Crypto.com | DeFi Wallet' ||
        ((_c = client === null || client === void 0 ? void 0 : client.peerMeta) === null || _c === void 0 ? void 0 : _c.name) === 'DeFi Wallet';
    if (!client || !client.connected) {
        return;
    }
    const [accountPublicAddress] = client.accounts;
    if (utils.isMobile()) {
        const deepLink = walletConnectorCore.getDeepLink({
            metadata,
            mode: 'regular',
            preference: deepLinkPreference,
            uri: client.uri,
        });
        window.location.href = deepLink;
    }
    try {
        // This delay is required for Crypto.com DeFi wallet, when there is no delay the app
        // will not open the pop-up to sign. That seems to be a limitation in the standalone client
        // so the delay is required to allow the users to sign the message
        if (isCryptoWallet && utils.isMobile()) {
            yield sleep(4000);
        }
        else {
            // The delay of 1 second is necessary for some of the wallets to open the sign UI in the
            // correct order, without this some wallets like Trust or OKX will no open properly,
            // and not allowing the user to sign the message
            yield sleep(1000);
        }
        const signature = yield client.signPersonalMessage([
            messageToSign,
            accountPublicAddress,
        ]);
        yield waitForSafeTransactionOrTimeout(accountPublicAddress, signature, messageToSign, client, rpcProvider);
        return signature;
    }
    catch (e) {
        walletConnectorCore.logger.debug(e);
        throw e;
    }
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Successful value as defined by the EIP
// https://eips.ethereum.org/EIPS/eip-1271#specification
const MAGIC_VALUE = '0x1626ba7e';
const IS_VALID_SIGNATURE_ABI = [
    'function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)',
];
const waitForSafeTransactionOrTimeout = (accountPublicAddress, signature, messageToSign, client, rpcProvider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _d;
    if (signature === '0x' &&
        // this is what wallet connect client returns there's no `safe` or `Safe`
        // exact string anywhere, so this seems like the best proxy
        ((_d = client.peerMeta) === null || _d === void 0 ? void 0 : _d.name) === 'WalletConnect Safe App') {
        if (!rpcProvider) {
            return;
        }
        const safeTransactionPromise = waitForSafeTransaction(accountPublicAddress, signature, messageToSign, yield rpcProvider());
        const timeoutPromise = new Promise((resolve) => {
            setTimeout(resolve, 120000);
        });
        yield Promise.race([safeTransactionPromise, timeoutPromise]);
    }
});
// this is a hack for safe
// before sending the signature downstream, we need to make sure
// the transaction is recorded first on the blockchain
// redcoast verify WILL fail if it attempts to verify the signature
// that has not yet been properly processed!
const waitForSafeTransaction = (accountPublicAddress, signature, messageToSign, rpcProvider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // wait for safe wallet to finish txn on the blockchain contract
    for (let i = 0; i < 120; i++) {
        try {
            // this will result in an exception if the transaction is still not ready
            // we need to catch it below
            const result = yield (rpcProvider === null || rpcProvider === void 0 ? void 0 : rpcProvider.readContract({
                abi: IS_VALID_SIGNATURE_ABI,
                address: accountPublicAddress,
                args: [viem.hashMessage(messageToSign), signature],
                functionName: 'isValidSignature',
            }));
            if (result === MAGIC_VALUE)
                return;
        }
        catch (err) {
            walletConnectorCore.logger.info('Safe transaction cannot be validated yet. Retrying.');
        }
        // try again after 2 seconds
        yield sleep(2000);
    }
});

exports.createSession = createSession;
exports.fetchWalletConnectEVMPublicAddress = fetchWalletConnectEVMPublicAddress;
exports.initClient = initClient;
exports.killWalletConnectSession = killWalletConnectSession;
exports.setupWalletConnectEventListeners = setupWalletConnectEventListeners;
exports.signWalletConnectPersonalMessage = signWalletConnectPersonalMessage;
exports.teardownWalletConnectEventListeners = teardownWalletConnectEventListeners;
