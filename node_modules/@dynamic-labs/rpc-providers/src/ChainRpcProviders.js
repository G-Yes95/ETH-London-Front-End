import { __awaiter } from '../_virtual/_tslib.js';
import { ProviderChain } from './types.js';

class ChainRpcProviders {
    static get client() {
        if (!ChainRpcProviders.instance) {
            ChainRpcProviders.instance = new ChainRpcProviders();
        }
        return ChainRpcProviders.instance;
    }
    constructor() {
        this.getProvidersMethods = {};
    }
    static getProviders(configurations) {
        Object.values(ProviderChain).forEach((chain) => {
            var _a, _b;
            if (!ChainRpcProviders.providers[chain]) {
                const providers = (_b = (_a = ChainRpcProviders.client.getProvidersMethods)[chain]) === null || _b === void 0 ? void 0 : _b.call(_a, configurations);
                if (providers) {
                    Object.assign(ChainRpcProviders.providers, {
                        [chain]: providers,
                    });
                }
            }
        });
        return ChainRpcProviders.providers;
    }
    static registerChainProviders(providerChain, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ChainRpcProviders.client.getProvidersMethods[providerChain]) {
                Object.assign(ChainRpcProviders.client.getProvidersMethods, {
                    [providerChain]: fn,
                });
            }
        });
    }
    static getEvmProviderByChainId(config, chainId) {
        var _a;
        const rpcProviders = ChainRpcProviders.getProviders(config);
        const provider = (_a = rpcProviders['evm']) === null || _a === void 0 ? void 0 : _a.find((provider) => provider.chainId === chainId);
        return provider;
    }
}
ChainRpcProviders.providers = {};
ChainRpcProviders.wipeInstance = () => {
    ChainRpcProviders.instance = undefined;
    ChainRpcProviders.providers = {};
};
ChainRpcProviders.getSolanaRpcProviderByChainId = (config, chainId) => {
    var _a;
    const rpcProviders = ChainRpcProviders.getProviders(config);
    const provider = (_a = rpcProviders['solana']) === null || _a === void 0 ? void 0 : _a.find((rpcProvider) => rpcProvider.chainId === chainId);
    return provider;
};
ChainRpcProviders.getStarknetRpcProviderByChainId = (config, chainId) => {
    var _a;
    const rpcProviders = ChainRpcProviders.getProviders(config);
    const provider = (_a = rpcProviders['starknet']) === null || _a === void 0 ? void 0 : _a.find((rpcProvider) => rpcProvider.chainId === chainId);
    return provider;
};

export { ChainRpcProviders };
