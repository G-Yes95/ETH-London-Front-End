import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { useViewContext } from '../ViewContext/ViewContext.js';

const WalletGroupContext = React__default.createContext(undefined);
const useWalletGroupContext = () => {
    const context = React__default.useContext(WalletGroupContext);
    if (context === undefined) {
        throw new Error('usage of useWalletGroupContext not wrapped in `WalletGroupContextProvider`.');
    }
    return context;
};
const WalletGroupContextProvider = ({ children, }) => {
    const [selectedWalletGroup, setselectedWalletGroup] = React__default.useState();
    const { setView } = useViewContext();
    const navigateToWalletGroup = React__default.useCallback((walletGroup) => {
        setselectedWalletGroup(walletGroup);
        setView('wallet-group');
    }, []);
    const contextValue = {
        navigateToWalletGroup,
        selectedWalletGroup,
    };
    return (jsx(WalletGroupContext.Provider, { value: contextValue, children: children }));
};

export { WalletGroupContext, WalletGroupContextProvider, useWalletGroupContext };
