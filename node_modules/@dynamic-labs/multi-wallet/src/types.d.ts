import type { ProjectSettings } from '@dynamic-labs/sdk-api';
import { WalletConnector, Chain, WalletConnectorsMethod, DeepLinkVariant } from '@dynamic-labs/wallet-connector-core';
import { NetworkConfigurationMap, WalletUiUtils } from '@dynamic-labs/types';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export type GetSupportedWalletsOpts = {
    appLogoUrl?: string;
    appName?: string;
    chainRpcProviders: typeof ChainRpcProviders;
    deepLinkPreference?: DeepLinkVariant;
    flowNetwork?: 'mainnet' | 'testnet';
    isWalletConnectV2Enabled?: boolean;
    networkConfigurations?: NetworkConfigurationMap;
    settings: ProjectSettings;
    skipMemo?: boolean;
    walletBook: WalletBookSchema;
    walletConnectV1Bridge?: string;
    walletConnectProjectId?: string;
    walletConnectorsProp: WalletConnectorsMethod[];
    walletConnectPreferredChains?: `eip155:${number}`[];
    walletUiUtils?: WalletUiUtils<WalletConnector>;
};
export type GetSupportedWallets = (opts: GetSupportedWalletsOpts) => WalletConnector[];
export type ChainInfo = {
    blockchainName: string;
    displayName: string;
    name: string;
    symbol: Chain;
};
export type ChainWihtIcon = {
    icon?: string;
    name: string | undefined;
};
