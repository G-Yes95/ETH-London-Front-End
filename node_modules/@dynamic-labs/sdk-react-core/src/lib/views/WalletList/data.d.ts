import { GetSupportedWalletsOpts } from '@dynamic-labs/multi-wallet';
import { WalletConnectorExtension } from '@dynamic-labs/wallet-connector-core';
interface IChain {
    enabled: boolean;
    name: string;
}
export declare const getEnabledChains: (chains: IChain[]) => ("STARK" | "ETH" | "FLOW" | "SOL" | "EVM" | "ALGO" | "ATOM" | "COSMOS")[];
type BaseGetSupportedWalletOpts = Omit<GetSupportedWalletsOpts, 'isWalletConnectV2Enabled' | 'walletConnectProjectId' | 'chainRpcProviders'>;
export declare const getWallets: (props: {
    getSupportedWalletOpts: BaseGetSupportedWalletOpts;
    walletConnectorExtensions?: WalletConnectorExtension[];
}) => import("../../shared").WalletOption[];
export {};
