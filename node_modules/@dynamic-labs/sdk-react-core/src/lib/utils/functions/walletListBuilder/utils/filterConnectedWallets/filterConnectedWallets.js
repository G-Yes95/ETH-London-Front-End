/**
 * Used to filter out wallets that are already connected
 * This is useful for connect-only multi-wallet, where we want users to only connect new wallets,
 * not additional accounts from the same wallet
 */
const filterConnectedWallets = ({ walletOptions, connectedWallets, }) => {
    const connectedWalletKeys = connectedWallets.map((connectedWallet) => connectedWallet.connector.key);
    return walletOptions.filter((wallet) => !connectedWalletKeys.includes(wallet.walletConnector.key));
};

export { filterConnectedWallets };
