import { NetworkConfigurationMap } from '@dynamic-labs/types';
import { EvmRpcProvider, ProviderChain, RegisteredProviderMethod, RpcProviders, SolanaRpcProvider, StarknetRpcProvider } from './types';
export declare class ChainRpcProviders {
    private static instance;
    private static providers;
    private getProvidersMethods;
    static get client(): ChainRpcProviders;
    private constructor();
    static wipeInstance: () => void;
    static getProviders(configurations: NetworkConfigurationMap): RpcProviders;
    static registerChainProviders(providerChain: ProviderChain, fn: RegisteredProviderMethod): Promise<void>;
    static getEvmProviderByChainId(config: NetworkConfigurationMap, chainId: number): EvmRpcProvider | undefined;
    static getSolanaRpcProviderByChainId: (config: NetworkConfigurationMap, chainId: string) => SolanaRpcProvider | undefined;
    static getStarknetRpcProviderByChainId: (config: NetworkConfigurationMap, chainId: string) => StarknetRpcProvider | undefined;
}
