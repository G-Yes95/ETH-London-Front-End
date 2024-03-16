import { NetworkConfigurationMap } from '@dynamic-labs/types';
import { DynamicRPCProviders } from '../../../shared';
type Props = {
    networkConfigurations: NetworkConfigurationMap | undefined;
};
export declare const useRpcProviders: ({ networkConfigurations, }: Props) => DynamicRPCProviders;
export {};
