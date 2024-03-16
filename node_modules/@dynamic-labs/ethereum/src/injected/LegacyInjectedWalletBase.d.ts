import { WalletClient } from 'viem';
import { Chain } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork } from '@dynamic-labs/types';
import { EthWalletConnector } from '../EthWalletConnector';
declare abstract class LegacyInjectedWalletBase extends EthWalletConnector {
    supportedChains: Chain[];
    connectedChain: Chain;
    publicAddress: string | undefined;
    walletConnectorFallback: boolean;
    getMobileOrInstalledWallet(): LegacyInjectedWalletBase;
    setupEventListeners(): void;
    getWalletClient(): WalletClient | undefined;
    isInstalledOnBrowser(): boolean;
    connect(): Promise<void>;
    fetchPublicAddress(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    proveOwnership(messageToSign: string): Promise<string | undefined>;
    endSession(): Promise<void>;
    providerSwitchNetwork({ network, provider, }: {
        network: EvmNetwork;
        provider: WalletClient;
    }): Promise<void>;
}
export default LegacyInjectedWalletBase;
