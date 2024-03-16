'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var index = require('../generateMessages/index.cjs');

// TODO - This function is doing too much we should split it up.
const getVerifyArgs = ({ walletConnector, nonce, walletProvider, environmentId, displaySiweStatement, skipEmptyAccountCheck, siweStatement, publicWalletAddress, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // WARNING - PLEASE READ!
    // DO NOT ADD ANY NEW ASYNC WORK WITH AWAIT!
    // Deep linking could break with too many blocking awaits
    // before the we call generateMessages.
    // This could manifest in users being directed to the app store
    // instead of the actual wallet app.
    const chain = walletConnector.connectedChain;
    // generate message to sign and then initiate signing step to prove ownership
    const { messageToSign, signedMessage } = yield index.generateMessages(publicWalletAddress, walletConnector, nonce, environmentId, displaySiweStatement, siweStatement);
    const network = String(yield walletConnector.getNetwork());
    return {
        chain,
        messageToSign,
        network,
        publicWalletAddress,
        signedMessage,
        skipEmptyAccountCheck,
        walletName: walletConnector.name,
        walletProvider,
    };
});

exports.getVerifyArgs = getVerifyArgs;
