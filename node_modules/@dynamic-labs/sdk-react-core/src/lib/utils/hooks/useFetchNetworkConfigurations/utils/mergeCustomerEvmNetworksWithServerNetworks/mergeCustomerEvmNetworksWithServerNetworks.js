const mergeCustomerEvmNetworksWithServerNetworks = (customerEvmNetworks, serverNetworks) => {
    const evmNetworks = [...customerEvmNetworks];
    serverNetworks.forEach((network) => {
        const existingNetwork = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((item) => item.chainId === network.chainId);
        if (!existingNetwork) {
            evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.unshift(network);
        }
    });
    return evmNetworks;
};

export { mergeCustomerEvmNetworksWithServerNetworks };
