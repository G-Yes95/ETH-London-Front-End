'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var rpcProviders = require('@dynamic-labs/rpc-providers');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const useRpcProviders = ({ networkConfigurations, }) => {
    let providers, evmDefaultProvider, solanaDefaultProvider;
    if (networkConfigurations) {
        try {
            providers = rpcProviders.ChainRpcProviders.getProviders(networkConfigurations);
            evmDefaultProvider = rpcProviders.ChainRpcProviders.getEvmProviderByChainId(networkConfigurations, 1);
            solanaDefaultProvider = rpcProviders.ChainRpcProviders.getSolanaRpcProviderByChainId(networkConfigurations, '101');
        }
        catch (error) {
            logger.logger.error(error);
        }
    }
    const getEvmRpcProviderByChainId = React.useCallback((chainId) => {
        if (!networkConfigurations) {
            return undefined;
        }
        return rpcProviders.ChainRpcProviders.getEvmProviderByChainId(networkConfigurations, chainId);
    }, [networkConfigurations]);
    return {
        evmDefaultProvider,
        evmProviders: providers === null || providers === void 0 ? void 0 : providers.evm,
        getEvmRpcProviderByChainId,
        solanaDefaultProvider,
        solanaProviders: providers === null || providers === void 0 ? void 0 : providers.solana,
    };
};

exports.useRpcProviders = useRpcProviders;
