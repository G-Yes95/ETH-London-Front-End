'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isWalletConnected = ({ address, chain, connector, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield connector.getConnectedAccounts();
    return accounts.some((account) => walletConnectorCore.isSameAddress(account, address, chain));
});

exports.isWalletConnected = isWalletConnected;
