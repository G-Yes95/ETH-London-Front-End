import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isSameAddress } from '@dynamic-labs/wallet-connector-core';

const isWalletConnected = ({ address, chain, connector, }) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield connector.getConnectedAccounts();
    return accounts.some((account) => isSameAddress(account, address, chain));
});

export { isWalletConnected };
