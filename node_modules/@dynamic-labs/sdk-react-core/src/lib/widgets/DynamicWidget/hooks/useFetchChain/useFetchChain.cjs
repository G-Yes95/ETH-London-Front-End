'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const useFetchChain = (connector) => {
    const [chain, setChain] = React.useState({
        name: '',
    });
    React.useEffect(() => {
        const fetchChain = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const chainId = yield connector.getNetwork();
            const { connectedChain } = connector;
            const chainInfo = walletConnectorCore.getChainInfo(connectedChain || '');
            const chainWithIcon = {
                name: chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.displayName,
            };
            /* istanbul ignore else */
            if (chainId && connector.evmNetworks) {
                const result = connector.evmNetworks.find((element) => element.chainId === chainId);
                chainWithIcon.name = (_a = result === null || result === void 0 ? void 0 : result.vanityName) !== null && _a !== void 0 ? _a : chainWithIcon.name;
                chainWithIcon.icon = result === null || result === void 0 ? void 0 : result.iconUrls[0];
            }
            setChain(chainWithIcon);
        });
        fetchChain();
    }, [connector]);
    return [chain];
};

exports.useFetchChain = useFetchChain;
