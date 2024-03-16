import { isSameAddress } from '@dynamic-labs/wallet-connector-core';

const isWalletLinked = (address, linkedWallets) => {
    if (!address || !(linkedWallets === null || linkedWallets === void 0 ? void 0 : linkedWallets.length)) {
        return false;
    }
    const linkedWallet = linkedWallets.find((wallet) => isSameAddress(wallet.address, address, wallet.chain));
    return Boolean(linkedWallet);
};

export { isWalletLinked };
