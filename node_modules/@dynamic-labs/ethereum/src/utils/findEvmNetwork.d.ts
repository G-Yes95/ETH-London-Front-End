import { EvmNetwork } from '@dynamic-labs/types';
export declare const findEvmNetwork: ({ chainId, name, networks, }: {
    chainId?: number | undefined;
    name?: string | undefined;
    networks: EvmNetwork[];
}) => EvmNetwork | undefined;
