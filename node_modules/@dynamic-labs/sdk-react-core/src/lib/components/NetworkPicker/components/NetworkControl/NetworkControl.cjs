'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var EvmNetworkControl = require('../EvmNetworkControl/EvmNetworkControl.cjs');
var NetworkControlSkeleton = require('../NetworkControlSkeleton/NetworkControlSkeleton.cjs');
var NonNetworkSwitchingSupportedControl = require('../NonNetworkSwitchingSupportedControl/NonNetworkSwitchingSupportedControl.cjs');

const NetworkControl = ({ loading, walletConnector, buttonClassName, network, evmNetworks, activeClassName, isOpen, setIsOpen, showNetworkName, }) => {
    if (loading) {
        return jsxRuntime.jsx(NetworkControlSkeleton.NetworkControlSkeleton, { className: buttonClassName });
    }
    else if ((walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain) &&
        !walletConnector.supportsNetworkSwitching()) {
        return (jsxRuntime.jsx(NonNetworkSwitchingSupportedControl.NonNetworkSwitchingSupportedControl, { className: buttonClassName, showNetworkName: showNetworkName, walletConnector: walletConnector }));
    }
    else {
        return (jsxRuntime.jsx(EvmNetworkControl.EvmNetworkControl, { showNetworkName: showNetworkName, evmNetworks: evmNetworks, activeClassName: activeClassName, className: buttonClassName, network: network, loading: loading, isOpen: isOpen, walletConnector: walletConnector, setIsOpen: setIsOpen }));
    }
};

exports.NetworkControl = NetworkControl;
