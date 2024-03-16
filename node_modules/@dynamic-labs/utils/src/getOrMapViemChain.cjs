'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chains = require('viem/chains');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var chains__namespace = /*#__PURE__*/_interopNamespace(chains);

// eslint-disable-next-line import/no-namespace
/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */
const getChain = (chainId) => {
    for (const chain of Object.values(chains__namespace)) {
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

exports.getChain = getChain;
exports.getOrMapViemChain = getOrMapViemChain;
exports.mapChain = mapChain;
