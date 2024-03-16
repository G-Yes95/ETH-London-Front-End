import { WalletClient } from 'viem';
import { Chain } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork } from '@dynamic-labs/types';
import { WalletSchema } from '@dynamic-labs/wallet-book';
import { EthProviderHelper } from '../ethProviderHelper';
import { EthWalletConnector } from '../EthWalletConnector';
declare abstract class InjectedWalletBase extends EthWalletConnector {
    supportedChains: Chain[];
    connectedChain: Chain;
    publicAddress: string | undefined;
    walletConnectorFallback: boolean;
    ethProviderHelper: EthProviderHelper | undefined;
    wallet: WalletSchema | undefined;
    getEthProviderHelper(): EthProviderHelper | undefined;
    getMobileOrInstalledWallet(): InjectedWalletBase;
    setupEventListeners(): void;
    getWalletClient(): WalletClient | undefined;
    isInstalledOnBrowser(): boolean;
    fetchPublicAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    proveOwnership(messageToSign: string): Promise<string | undefined>;
    endSession(): Promise<void>;
    providerSwitchNetwork({ network, provider, }: {
        network: EvmNetwork;
        provider: WalletClient;
    }): Promise<void>;
}
export default InjectedWalletBase;
