import { LAST_USED_WALLET } from '../../../../utils/constants/localStorage.js';
import '../../../../utils/constants/colors.js';
import { LocalStorage } from '../../classes/storage/localStorage.js';
import { isWalletGroup } from '../../../../utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js';

const getLastUsedWalletName = () => LocalStorage.getFromLS(LAST_USED_WALLET);
const getWalletGroupLabel = (walletGroup) => {
    const lastUsedWalletName = getLastUsedWalletName();
    const hasNestedLastUsedWallet = walletGroup.groupedWallets.some((walletOption) => walletOption.walletConnector.name === lastUsedWalletName ||
        walletOption.walletConnector.key === lastUsedWalletName);
    if (hasNestedLastUsedWallet) {
        return 'Last used';
    }
    const hasNestedInstalledWallets = walletGroup.groupedWallets.some((walletOption) => walletOption.isInstalledOnBrowser);
    if (hasNestedInstalledWallets) {
        return 'Installed';
    }
    return 'Multichain';
};
const getWalletLabel = (walletOption, usingMultiWallet = false) => {
    const lastUsedWalletName = getLastUsedWalletName();
    const { name: walletName, key: walletKey } = walletOption.walletConnector;
    const isLastUsedWallet = walletName === lastUsedWalletName || walletKey === lastUsedWalletName;
    if (isLastUsedWallet)
        return 'Last used';
    if (walletOption.isInstalledOnBrowser)
        return 'Installed';
    return undefined;
};
const getWalletListItemLabel = ({ usingMultiWallet, wallet, }) => {
    if (isWalletGroup(wallet)) {
        return getWalletGroupLabel(wallet);
    }
    return getWalletLabel(wallet, usingMultiWallet);
};

export { getWalletListItemLabel };
