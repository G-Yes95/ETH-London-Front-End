import { type Connection } from '@solana/web3.js';
import { PublicClient } from 'viem';
import { type RpcProvider } from 'starknet';
import { type NetworkConfigurationMap } from '@dynamic-labs/types';
export declare enum ProviderChain {
    EVM = "evm",
    SOLANA = "solana",
    STARKNET = "starknet"
}
export type EvmRpcProvider = {
    chainId: number;
    chainName: string;
    provider: PublicClient;
};
export type SolanaRpcProvider = {
    chainId: string;
    chainName: string;
    provider: Connection;
};
export type StarknetRpcProvider = {
    chainId: string;
    chainName: string;
    provider: RpcProvider;
};
export type RpcProviderLookup = {
    evm: EvmRpcProvider[];
    solana: SolanaRpcProvider[];
    starknet: StarknetRpcProvider[];
};
export type RpcProviders = {
    [key in ProviderChain]?: RpcProviderLookup[key];
};
export type RegisteredProviderMethod = (configuration: NetworkConfigurationMap) => RpcProviders[keyof RpcProviders] | undefined;
export type RegisteredProviderMethods = {
    [key in ProviderChain]?: RegisteredProviderMethod;
};
