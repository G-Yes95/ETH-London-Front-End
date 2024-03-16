'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ViewContext = require('../ViewContext/ViewContext.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const WalletGroupContext = React__default["default"].createContext(undefined);
const useWalletGroupContext = () => {
    const context = React__default["default"].useContext(WalletGroupContext);
    if (context === undefined) {
        throw new Error('usage of useWalletGroupContext not wrapped in `WalletGroupContextProvider`.');
    }
    return context;
};
const WalletGroupContextProvider = ({ children, }) => {
    const [selectedWalletGroup, setselectedWalletGroup] = React__default["default"].useState();
    const { setView } = ViewContext.useViewContext();
    const navigateToWalletGroup = React__default["default"].useCallback((walletGroup) => {
        setselectedWalletGroup(walletGroup);
        setView('wallet-group');
    }, []);
    const contextValue = {
        navigateToWalletGroup,
        selectedWalletGroup,
    };
    return (jsxRuntime.jsx(WalletGroupContext.Provider, { value: contextValue, children: children }));
};

exports.WalletGroupContext = WalletGroupContext;
exports.WalletGroupContextProvider = WalletGroupContextProvider;
exports.useWalletGroupContext = useWalletGroupContext;
