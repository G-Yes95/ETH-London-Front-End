const chainsInfo = [
    {
        blockchainName: 'Algorand',
        displayName: 'Algorand',
        name: 'algorand',
        symbol: 'ALGO',
    },
    {
        blockchainName: 'Ethereum',
        displayName: 'EVM',
        name: 'evm',
        symbol: 'ETH',
    },
    {
        blockchainName: 'Flow',
        displayName: 'Flow',
        name: 'flow',
        symbol: 'FLOW',
    },
    {
        blockchainName: 'Solana',
        displayName: 'Solana',
        name: 'solana',
        symbol: 'SOL',
    },
    {
        blockchainName: 'Starknet',
        displayName: 'Starknet',
        name: 'starknet',
        symbol: 'ETH',
    },
    {
        blockchainName: 'Cosmos',
        displayName: 'Cosmos',
        name: 'cosmos',
        symbol: 'COSMOS',
    },
];
const chainOverrides = {
    eip155: 'evm',
    eth: 'evm',
    stark: 'starknet',
};
const getChainInfo = (chain) => {
    var _a;
    const lowerCasedChain = chain.toLowerCase();
    const normalizedChain = (_a = chainOverrides[lowerCasedChain]) !== null && _a !== void 0 ? _a : lowerCasedChain;
    const chainInfo = chainsInfo.find((info) => info.name === normalizedChain ||
        info.symbol.toLocaleLowerCase() === normalizedChain);
    if (!chainInfo) {
        return;
    }
    return chainInfo;
};

export { getChainInfo };
