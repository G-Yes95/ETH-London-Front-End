import { useCallback } from 'react';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const useRpcProviders = ({ networkConfigurations, }) => {
    let providers, evmDefaultProvider, solanaDefaultProvider;
    if (networkConfigurations) {
        try {
            providers = ChainRpcProviders.getProviders(networkConfigurations);
            evmDefaultProvider = ChainRpcProviders.getEvmProviderByChainId(networkConfigurations, 1);
            solanaDefaultProvider = ChainRpcProviders.getSolanaRpcProviderByChainId(networkConfigurations, '101');
        }
        catch (error) {
            logger.error(error);
        }
    }
    const getEvmRpcProviderByChainId = useCallback((chainId) => {
        if (!networkConfigurations) {
            return undefined;
        }
        return ChainRpcProviders.getEvmProviderByChainId(networkConfigurations, chainId);
    }, [networkConfigurations]);
    return {
        evmDefaultProvider,
        evmProviders: providers === null || providers === void 0 ? void 0 : providers.evm,
        getEvmRpcProviderByChainId,
        solanaDefaultProvider,
        solanaProviders: providers === null || providers === void 0 ? void 0 : providers.solana,
    };
};

export { useRpcProviders };
