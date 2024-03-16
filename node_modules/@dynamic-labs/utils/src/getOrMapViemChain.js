import * as chains from 'viem/chains';

// eslint-disable-next-line import/no-namespace
/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */
const getChain = (chainId) => {
    for (const chain of Object.values(chains)) {
        if ('id' in chain) {
            if (chain.id === chainId) {
                return chain;
            }
        }
    }
    throw new Error(`Chain with id ${chainId} not found`);
};
const mapChain = (network) => {
    var _a;
    return ({
        blockExplorers: ((_a = network.blockExplorerUrls) === null || _a === void 0 ? void 0 : _a[0])
            ? {
                default: {
                    name: network.blockExplorerUrls[0],
                    url: network.blockExplorerUrls[0],
                },
            }
            : undefined,
        id: network.chainId,
        name: network.vanityName || network.chainName,
        nativeCurrency: network.nativeCurrency,
        network: network.chainName,
        rpcUrls: {
            default: { http: network.rpcUrls },
            public: { http: network.rpcUrls },
        },
    });
};
const getOrMapViemChain = (network) => {
    let chain;
    try {
        chain = getChain(network.chainId);
    }
    catch (_a) {
        chain = mapChain(network);
    }
    return chain;
};

export { getChain, getOrMapViemChain, mapChain };
