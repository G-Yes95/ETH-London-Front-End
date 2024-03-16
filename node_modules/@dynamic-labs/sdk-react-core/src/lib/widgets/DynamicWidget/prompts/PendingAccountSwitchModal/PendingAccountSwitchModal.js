import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useConnectedAccountWallet } from '../../../../utils/hooks/useConnectedAccountWallet/useConnectedAccountWallet.js';
import { DefaultPromptModal } from '../DefaultPromptModal/DefaultPromptModal.js';
import { SwitchAccountView } from './SwitchAccountView/SwitchAccountView.js';
import { SwitchOrUseActiveAccountView } from './SwitchOrUseActiveAccountView/SwitchOrUseActiveAccountView.js';

const PendingAccountSwitchModal = () => {
    var _a, _b;
    const { selectedWalletWithAction, primaryWallet, secondaryWallets } = useInternalDynamicContext();
    const selectedConnector = (_a = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.connector;
    const isSameWallet = (selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.name) === (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name);
    const { data: connectedWallet } = useConnectedAccountWallet((_b = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _b === void 0 ? void 0 : _b.connector, secondaryWallets);
    useEffect(() => {
        //flow client library only supports one connected wallet at any given time.
        const disconnectAndConnect = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            if ((selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.connectedChain) !== 'FLOW') {
                return;
            }
            yield ((_a = selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.endSession) === null || _a === void 0 ? void 0 : _a.call(selectedConnector));
            (_b = selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.connect) === null || _b === void 0 ? void 0 : _b.call(selectedConnector);
        });
        disconnectAndConnect();
    }, [selectedConnector]);
    return (jsx(DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsx(WalletIcon, { walletKey: selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.key }), title: `Switch wallet in ${selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet.connector.name}`, children: isSameWallet || !connectedWallet ? (jsx(SwitchAccountView, { selectedWalletToSwitchTo: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet })) : (jsx(SwitchOrUseActiveAccountView, { connectedWallet: connectedWallet, selectedWalletToSwitchTo: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet })) }));
};

export { PendingAccountSwitchModal };
