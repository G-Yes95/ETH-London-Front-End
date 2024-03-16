import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useRef, useCallback } from 'react';
import { decodeJwt } from '../../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../ViewContext/ViewContext.js';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import { CONNECTED_WALLET_NAME_SERVICE } from '../../../../utils/constants/localStorage.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useLocalStorage } from '../../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import { getWalletVerifiedCredential } from '../../../../utils/functions/getWalletVerifiedCredential/getWalletVerifiedCredential.js';

const useNameService = ({ currentWallet, authToken }) => {
    const [connectedNameService, setConnectedNameService, removeConnectedNameService,] = useLocalStorage(CONNECTED_WALLET_NAME_SERVICE, null);
    const lastFetchedNameServiceAddress = useRef();
    const fetchNameServiceFromBlockchain = useCallback((wallet) => __awaiter(void 0, void 0, void 0, function* () {
        const { address, connector } = wallet;
        if (address === lastFetchedNameServiceAddress.current) {
            return;
        }
        setConnectedNameService(null);
        // store last address used to fetch name service so we can check for it when promise resolves
        // to avoid race conditions
        lastFetchedNameServiceAddress.current = address;
        let ns;
        try {
            ns = yield connector.getNameService();
        }
        catch (e) {
            // do nothing
        }
        // only sets name service if the address used to fetch it is the last one used for fetching
        // this avoid issues with promises not resolving in the correct order
        if (lastFetchedNameServiceAddress.current === address) {
            setConnectedNameService({
                address,
                avatar: ns === null || ns === void 0 ? void 0 : ns.avatar,
                name: ns === null || ns === void 0 ? void 0 : ns.name,
            });
            return ns;
        }
        return undefined;
    }), [setConnectedNameService]);
    const getNameService = (address) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (!currentWallet) {
            return;
        }
        const verifiedCredentials = (_a = decodeJwt(authToken)) === null || _a === void 0 ? void 0 : _a.verifiedCredentials;
        //if there are verified credentials, check if there is a name service for the current wallet
        if (verifiedCredentials) {
            const verifiedCredential = getWalletVerifiedCredential(currentWallet === null || currentWallet === void 0 ? void 0 : currentWallet.address, verifiedCredentials, currentWallet.chain);
            if (verifiedCredential && ((_b = verifiedCredential.nameService) === null || _b === void 0 ? void 0 : _b.name)) {
                return verifiedCredential.nameService;
            }
        }
        // don't look for name service in blockchain if provided address doesn't match current wallet
        if (address && (currentWallet === null || currentWallet === void 0 ? void 0 : currentWallet.address) !== address) {
            return;
        }
        // if finds name service info in local storage and its related address matches the connected wallet address,
        // return it
        if (connectedNameService &&
            connectedNameService.address === (currentWallet === null || currentWallet === void 0 ? void 0 : currentWallet.address)) {
            return {
                avatar: connectedNameService.avatar,
                name: connectedNameService.name,
            };
        }
        // if doesn't find correct name service in verified credentials or local storage, fetch it from blockchain
        return fetchNameServiceFromBlockchain(currentWallet);
    });
    return { getNameService, removeConnectedNameService };
};

export { useNameService };
