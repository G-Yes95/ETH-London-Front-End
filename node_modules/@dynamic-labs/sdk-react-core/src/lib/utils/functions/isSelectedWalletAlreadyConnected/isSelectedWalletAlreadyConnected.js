import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';

const isSelectedWalletAlreadyConnected = (linkedWallets, selectedWallet, user) => {
    if (!user)
        return false;
    return linkedWallets
        .map(({ connector }) => normalizeWalletName(connector.name))
        .includes(normalizeWalletName(selectedWallet.name));
};

export { isSelectedWalletAlreadyConnected };
