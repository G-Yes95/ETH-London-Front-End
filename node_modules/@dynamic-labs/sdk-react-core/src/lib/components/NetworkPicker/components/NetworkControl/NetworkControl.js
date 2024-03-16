import { jsx } from 'react/jsx-runtime';
import { EvmNetworkControl } from '../EvmNetworkControl/EvmNetworkControl.js';
import { NetworkControlSkeleton } from '../NetworkControlSkeleton/NetworkControlSkeleton.js';
import { NonNetworkSwitchingSupportedControl } from '../NonNetworkSwitchingSupportedControl/NonNetworkSwitchingSupportedControl.js';

const NetworkControl = ({ loading, walletConnector, buttonClassName, network, evmNetworks, activeClassName, isOpen, setIsOpen, showNetworkName, }) => {
    if (loading) {
        return jsx(NetworkControlSkeleton, { className: buttonClassName });
    }
    else if ((walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain) &&
        !walletConnector.supportsNetworkSwitching()) {
        return (jsx(NonNetworkSwitchingSupportedControl, { className: buttonClassName, showNetworkName: showNetworkName, walletConnector: walletConnector }));
    }
    else {
        return (jsx(EvmNetworkControl, { showNetworkName: showNetworkName, evmNetworks: evmNetworks, activeClassName: activeClassName, className: buttonClassName, network: network, loading: loading, isOpen: isOpen, walletConnector: walletConnector, setIsOpen: setIsOpen }));
    }
};

export { NetworkControl };
