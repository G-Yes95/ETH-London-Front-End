import { __awaiter } from '../../../../../_virtual/_tslib.js';

const isTestnet = (primaryWallet) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector)) {
        return false;
    }
    return (((_b = (_a = (yield primaryWallet.connector.getPublicClient())) === null || _a === void 0 ? void 0 : _a.chain) === null || _b === void 0 ? void 0 : _b.testnet) || false);
});

export { isTestnet };
