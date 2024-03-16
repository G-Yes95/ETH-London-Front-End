'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var multiWallet = require('@dynamic-labs/multi-wallet');
var utils = require('@dynamic-labs/utils');

const generateMessages = (publicWalletAddress, walletConnector, nonce, projectEnvironmentId, displaySiweStatement, siweStatement) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (publicWalletAddress === undefined) {
        throw new utils.DynamicError('Unable to fetch the public address from the wallet');
    }
    if (!walletConnector.connectedChain) {
        throw new utils.DynamicError('Wallet is not connected');
    }
    let chainId = yield walletConnector.getNetwork();
    if (chainId === undefined) {
        if (walletConnector.name === 'bloctoevm') {
            chainId = 137;
        }
        else if (walletConnector.connectedChain === 'EVM') {
            chainId = 1;
        }
    }
    const messageToSign = multiWallet.generateMessageToSign({
        blockchain: walletConnector.connectedChain,
        chainId: chainId,
        domain: window.location.host,
        nonce,
        publicKey: publicWalletAddress,
        requestId: projectEnvironmentId,
        resources: walletConnector.providerResources,
        statement: displaySiweStatement
            ? siweStatement.replace(/(\r\n|\n|\r)/gm, ' ').trim()
            : undefined,
        uri: window.location.href,
    });
    const signedMessage = yield walletConnector.proveOwnership(messageToSign);
    if (!signedMessage) {
        throw new utils.DynamicError('Unable to sign the message');
    }
    return { messageToSign, signedMessage };
});

exports.generateMessages = generateMessages;
