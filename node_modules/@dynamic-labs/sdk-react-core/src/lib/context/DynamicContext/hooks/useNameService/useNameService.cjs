'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var decodeJwt = require('../../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../ViewContext/ViewContext.cjs');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../../../utils/constants/localStorage.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
var getWalletVerifiedCredential = require('../../../../utils/functions/getWalletVerifiedCredential/getWalletVerifiedCredential.cjs');

const useNameService = ({ currentWallet, authToken }) => {
    const [connectedNameService, setConnectedNameService, removeConnectedNameService,] = useLocalStorage.useLocalStorage(localStorage.CONNECTED_WALLET_NAME_SERVICE, null);
    const lastFetchedNameServiceAddress = React.useRef();
    const fetchNameServiceFromBlockchain = React.useCallback((wallet) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    const getNameService = (address) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (!currentWallet) {
            return;
        }
        const verifiedCredentials = (_a = decodeJwt.decodeJwt(authToken)) === null || _a === void 0 ? void 0 : _a.verifiedCredentials;
        //if there are verified credentials, check if there is a name service for the current wallet
        if (verifiedCredentials) {
            const verifiedCredential = getWalletVerifiedCredential.getWalletVerifiedCredential(currentWallet === null || currentWallet === void 0 ? void 0 : currentWallet.address, verifiedCredentials, currentWallet.chain);
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

exports.useNameService = useNameService;
