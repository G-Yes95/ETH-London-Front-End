import './polyfills.js';
import { TurnkeyWalletConnectors } from '@dynamic-labs/turnkey';
export { BloctoInjected } from './injected/BloctoInjected.js';
export { BraveEvm } from './injected/BraveEvm.js';
export { Dawn } from './injected/Dawn.js';
export { ExodusEvm } from './injected/ExodusEvm.js';
export { Frame } from './injected/Frame.js';
export { GameStop } from './injected/GameStop.js';
export { Opera } from './injected/Opera.js';
export { PhantomEvm } from './injected/PhantomEvm.js';
export { Trust } from './injected/Trust.js';
export { Zerion } from './injected/Zerion.js';
export { Rabby } from './injected/Rabby.js';
import { fetchInjectedWalletConnector } from './injected/fetchInjectedWalletConnectors.js';
export { fetchInjectedWalletConnector } from './injected/fetchInjectedWalletConnectors.js';
import { legacyInjectedWallets } from './injected/legacyInjectedWallets.js';
export { filteredLegacyInjectedWalletKeys, legacyInjectedWallets } from './injected/legacyInjectedWallets.js';
import './walletConnect/walletConnectV2.js';
import '@walletconnect/ethereum-provider';
import 'viem';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
export { EthWalletConnector } from './EthWalletConnector.js';
export { INFURA_ID } from './constants.js';
import '@walletconnect/client';
import { fetchWalletConnectWallets, getWalletConnectConnector } from './walletConnect/fetchWalletConnectWallets.js';
import { Coinbase } from './coinbase/coinbase.js';
export { EthProviderHelper } from './ethProviderHelper.js';
export { LegacyEthProviderHelper } from './legacyEthProviderHelper.js';

const EthereumWalletConnectors = (props) => [
    ...legacyInjectedWallets,
    ...fetchInjectedWalletConnector(props),
    ...fetchWalletConnectWallets(props),
    ...TurnkeyWalletConnectors(props),
    Coinbase,
    getWalletConnectConnector(props),
];

export { EthereumWalletConnectors };
