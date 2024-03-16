import { jsx } from 'react/jsx-runtime';
import { useWalletBookContext, getWalletGroup, WalletIcon } from '@dynamic-labs/wallet-book';
import { SelectWalletChainLayout } from '../../components/SelectWalletChainLayout/SelectWalletChainLayout.js';
import { useWalletGroupContext } from '../../context/WalletGroupContext/WalletGroupContext.js';
import { WalletGroupItem } from './components/WalletGroupItem/WalletGroupItem.js';

const WalletGroupView = () => {
    var _a;
    const { selectedWalletGroup } = useWalletGroupContext();
    const { walletBook } = useWalletBookContext();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletBookData = getWalletGroup(walletBook, selectedWalletGroup === null || selectedWalletGroup === void 0 ? void 0 : selectedWalletGroup.key);
    return (jsx(SelectWalletChainLayout, { HeaderIcon: jsx(WalletIcon, { walletKey: (_a = walletBookData.brand) === null || _a === void 0 ? void 0 : _a.spriteId }), children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsx(WalletGroupItem, { wallet: wallet }, `${wallet.key}_${index}`))) }));
};

export { WalletGroupView };
