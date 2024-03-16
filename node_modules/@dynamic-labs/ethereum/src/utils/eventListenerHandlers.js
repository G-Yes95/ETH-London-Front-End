import { __awaiter } from '../../_virtual/_tslib.js';

const eventListenerHandlers = (walletConnector, publicClient) => {
    const handleAccountChange = (accounts) => __awaiter(void 0, void 0, void 0, function* () {
        if (accounts.length === 0) {
            walletConnector.emit('disconnect');
            return;
        }
        walletConnector.emit('accountChange', { accounts });
    });
    const handleChainChange = () => __awaiter(void 0, void 0, void 0, function* () {
        const chainId = yield publicClient.getChainId();
        walletConnector.emit('chainChange', {
            chain: chainId.toString(),
        });
    });
    const handleDisconnect = (error) => __awaiter(void 0, void 0, void 0, function* () {
        if ((error === null || error === void 0 ? void 0 : error.code) === 1013) {
            return;
        }
        walletConnector.emit('disconnect');
    });
    return {
        handleAccountChange,
        handleChainChange,
        handleDisconnect,
    };
};

export { eventListenerHandlers };
