import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useState, useEffect } from 'react';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';

const useFetchCurrency = (connector, network) => {
    const [currency, setCurrency] = useState('');
    useEffect(() => {
        const fetchChainCurrency = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const chainId = yield connector.getNetwork();
            const chainInfo = getChainInfo((_a = connector.connectedChain) !== null && _a !== void 0 ? _a : '');
            /* istanbul ignore else */
            if (!chainId) {
                setCurrency(chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.symbol);
                return;
            }
            const network = connector.connectedChain === 'STARK'
                ? 'starknetNetworks'
                : 'evmNetworks';
            const result = (_b = connector[network]) === null || _b === void 0 ? void 0 : _b.find((element) => element.chainId === chainId);
            setCurrency((_d = (_c = result === null || result === void 0 ? void 0 : result.nativeCurrency) === null || _c === void 0 ? void 0 : _c.symbol) !== null && _d !== void 0 ? _d : chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.symbol);
            return [currency];
        });
        fetchChainCurrency();
    }, [network]);
    return [currency];
};

export { useFetchCurrency };
