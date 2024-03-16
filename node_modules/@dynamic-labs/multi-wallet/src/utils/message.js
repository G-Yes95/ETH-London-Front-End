import { getAddress } from 'viem';
import { getChainInfo, logger } from '@dynamic-labs/wallet-connector-core';

const generateMessageToSign = ({ blockchain, domain, chainId, nonce, uri, publicKey, issuedAt = new Date().toISOString(), statement, requestId, resources, }) => {
    var _a, _b;
    if (blockchain === 'STARK') {
        return JSON.stringify({
            domain: domain || 'dynamic.xyz',
            nonce,
        });
    }
    const blockchainName = (_b = (_a = getChainInfo(blockchain)) === null || _a === void 0 ? void 0 : _a.blockchainName) !== null && _b !== void 0 ? _b : 'Ethereum';
    // This format follows the sign-in with ethereum (SIWE) standard,
    // but we are using it also for non-ethereum wallets for now (eg. Solana)
    // for more context on format and fields, please see:
    // https://docs.login.xyz/general-information/siwe-overview/eip-4361
    const header = `${domain} wants you to sign in with your ${blockchainName} account:`;
    // This is only required for Ethereum-based wallets
    const messageAddress = getEip55Address(publicKey, chainId);
    const prefix = [header, messageAddress].join('\n');
    // If there is a statement, we want to add a gap between the prefix and the statement
    // two times '\n', first to move statement to next line and second to add a gap between prefix and statement
    const prefixWithStatementGap = statement ? '\n\n' : '\n';
    const prefixWithStatement = `${[prefix, statement].join(prefixWithStatementGap)}\n`;
    const suffixFields = [];
    suffixFields.push(`URI: ${uri}`);
    suffixFields.push('Version: 1');
    if (chainId) {
        suffixFields.push(`Chain ID: ${chainId}`);
    }
    suffixFields.push(`Nonce: ${nonce}`);
    suffixFields.push(`Issued At: ${issuedAt}`);
    if (requestId) {
        suffixFields.push(`Request ID: ${requestId}`);
    }
    if (resources === null || resources === void 0 ? void 0 : resources.length) {
        suffixFields.push(`Resources:${resources.map((resource) => '\n- ' + resource).join()}`);
    }
    const suffix = suffixFields.join('\n');
    return [prefixWithStatement, suffix].join('\n');
};
// The SIWE parser library used to validate signed messages for EVM/Ethereum
// checks that an address is in EIP55 format, so make sure we do that here.
// see: https://eips.ethereum.org/EIPS/eip-55
const getEip55Address = (publicKey, chainId) => {
    try {
        if (chainId) {
            return getAddress(publicKey);
        }
    }
    catch (err) {
        logger.debug(`Error getting checksum, returning default ${publicKey}`);
    }
    return publicKey;
};

export { generateMessageToSign, getEip55Address };
