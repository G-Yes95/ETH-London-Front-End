import { createContext, createElement } from 'react';

const WalletBookContext = createContext({});
const WalletBookContextProvider = ({ walletBook, children, }) => createElement(WalletBookContext.Provider, {
    value: { walletBook },
}, children);

export { WalletBookContext, WalletBookContextProvider };
