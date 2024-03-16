import { Hex, PublicClient, WalletClient } from 'viem';
import { ProviderCondition, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { IEthereum, ProviderFlag } from './types';
export declare class LegacyEthProviderHelper {
    static BraveProvider: () => IEthereum | undefined;
    static DawnProvider: () => IEthereum | undefined;
    static FrameProvider: () => IEthereum | undefined;
    static CoinbaseProvider: () => IEthereum | undefined;
    static OperaProvider: () => IEthereum | undefined;
    static GameStopProvider: () => IEthereum | undefined;
    static ExodusProvider: () => IEthereum | undefined;
    static BloctoProvider: () => IEthereum | undefined;
    static TrustWalletProvider: () => IEthereum | undefined;
    static PhantomProvider: () => IEthereum | undefined;
    static ZerionProvider: () => IEthereum | undefined;
    static SuperbProvider: () => IEthereum | undefined;
    static RabbyProvider: () => IEthereum | undefined;
    static OKXProvider: () => IEthereum | undefined;
    static UnknownInjectedProvider: () => IEthereum | undefined;
    static providers: {
        [wallet: string]: () => IEthereum | undefined;
    };
    static installedProviderLookup(providerFlags: Array<ProviderCondition<ProviderFlag>>): IEthereum | undefined;
    static allInstalledProviders(): IEthereum[];
    static isInstalledHelper(walletName: string): boolean;
    static findProvider(walletName: string): IEthereum | undefined;
    static findWalletClient(walletName: string): WalletClient | undefined;
    static fetchPublicAddressWithName(name: string): Promise<Hex | undefined>;
    static fetchPublicAddressWithProvider(client: WalletClient): Promise<Hex | undefined>;
    static signMessageWithName(messageToSign: string, name: string): Promise<Hex | undefined>;
    static _setupEventListeners(walletName: string, walletConnector: WalletConnector, publicClient: PublicClient): {
        tearDownEventListeners: () => void;
    };
}
