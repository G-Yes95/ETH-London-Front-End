import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { generateMessageToSign } from '@dynamic-labs/multi-wallet';
import { DynamicError } from '@dynamic-labs/utils';

const generateMessages = (publicWalletAddress, walletConnector, nonce, projectEnvironmentId, displaySiweStatement, siweStatement) => __awaiter(void 0, void 0, void 0, function* () {
    if (publicWalletAddress === undefined) {
        throw new DynamicError('Unable to fetch the public address from the wallet');
    }
    if (!walletConnector.connectedChain) {
        throw new DynamicError('Wallet is not connected');
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
    const messageToSign = generateMessageToSign({
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
        throw new DynamicError('Unable to sign the message');
    }
    return { messageToSign, signedMessage };
});

export { generateMessages };
