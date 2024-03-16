import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useState, useEffect } from 'react';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';

const useFetchChain = (connector) => {
    const [chain, setChain] = useState({
        name: '',
    });
    useEffect(() => {
        const fetchChain = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const chainId = yield connector.getNetwork();
            const { connectedChain } = connector;
            const chainInfo = getChainInfo(connectedChain || '');
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

export { useFetchChain };
