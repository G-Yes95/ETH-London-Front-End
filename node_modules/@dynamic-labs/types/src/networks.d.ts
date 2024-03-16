import { type NetworkConfiguration } from '@dynamic-labs/sdk-api';
export type GenericNetwork = Omit<NetworkConfiguration, 'chainId' | 'networkId' | 'shortName' | 'chain'> & {
    chainId: number | string;
    networkId: number | string;
};
export type EvmNetwork = Omit<GenericNetwork, 'chainId'> & {
    chainId: number;
};
export type NetworkConfigurationMap = {
    [key: string]: GenericNetwork[] | undefined;
};
