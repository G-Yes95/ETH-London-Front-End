'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./polyfills.cjs');
var turnkey = require('@dynamic-labs/turnkey');
var BloctoInjected = require('./injected/BloctoInjected.cjs');
var BraveEvm = require('./injected/BraveEvm.cjs');
var Dawn = require('./injected/Dawn.cjs');
var ExodusEvm = require('./injected/ExodusEvm.cjs');
var Frame = require('./injected/Frame.cjs');
var GameStop = require('./injected/GameStop.cjs');
var Opera = require('./injected/Opera.cjs');
var PhantomEvm = require('./injected/PhantomEvm.cjs');
var Trust = require('./injected/Trust.cjs');
var Zerion = require('./injected/Zerion.cjs');
var Rabby = require('./injected/Rabby.cjs');
var fetchInjectedWalletConnectors = require('./injected/fetchInjectedWalletConnectors.cjs');
var legacyInjectedWallets = require('./injected/legacyInjectedWallets.cjs');
require('./walletConnect/walletConnectV2.cjs');
require('@walletconnect/ethereum-provider');
require('viem');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/wallet-book');
require('@dynamic-labs/utils');
var EthWalletConnector = require('./EthWalletConnector.cjs');
var constants = require('./constants.cjs');
require('@walletconnect/client');
var fetchWalletConnectWallets = require('./walletConnect/fetchWalletConnectWallets.cjs');
var coinbase = require('./coinbase/coinbase.cjs');
var ethProviderHelper = require('./ethProviderHelper.cjs');
var legacyEthProviderHelper = require('./legacyEthProviderHelper.cjs');

const EthereumWalletConnectors = (props) => [
    ...legacyInjectedWallets.legacyInjectedWallets,
    ...fetchInjectedWalletConnectors.fetchInjectedWalletConnector(props),
    ...fetchWalletConnectWallets.fetchWalletConnectWallets(props),
    ...turnkey.TurnkeyWalletConnectors(props),
    coinbase.Coinbase,
    fetchWalletConnectWallets.getWalletConnectConnector(props),
];

exports.BloctoInjected = BloctoInjected.BloctoInjected;
exports.BraveEvm = BraveEvm.BraveEvm;
exports.Dawn = Dawn.Dawn;
exports.ExodusEvm = ExodusEvm.ExodusEvm;
exports.Frame = Frame.Frame;
exports.GameStop = GameStop.GameStop;
exports.Opera = Opera.Opera;
exports.PhantomEvm = PhantomEvm.PhantomEvm;
exports.Trust = Trust.Trust;
exports.Zerion = Zerion.Zerion;
exports.Rabby = Rabby.Rabby;
exports.fetchInjectedWalletConnector = fetchInjectedWalletConnectors.fetchInjectedWalletConnector;
exports.filteredLegacyInjectedWalletKeys = legacyInjectedWallets.filteredLegacyInjectedWalletKeys;
exports.legacyInjectedWallets = legacyInjectedWallets.legacyInjectedWallets;
exports.EthWalletConnector = EthWalletConnector.EthWalletConnector;
exports.INFURA_ID = constants.INFURA_ID;
exports.EthProviderHelper = ethProviderHelper.EthProviderHelper;
exports.LegacyEthProviderHelper = legacyEthProviderHelper.LegacyEthProviderHelper;
exports.EthereumWalletConnectors = EthereumWalletConnectors;
