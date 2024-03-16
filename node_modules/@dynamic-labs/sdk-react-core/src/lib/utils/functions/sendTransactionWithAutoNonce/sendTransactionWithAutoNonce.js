import { __awaiter } from '../../../../../_virtual/_tslib.js';

const MAGIC_COULD_NOT_REPLACE_TRANSACTION_ERROR_CODE = -32603;
/**
 * Sends a transaction with an automatically determined nonce, if not provided.
 *
 * In Ethereum, each transaction sent from a particular address must have a unique nonce.
 * If the transaction does not already have a nonce, this function helps to automatically set it.
 * If a transaction with a particular nonce fails due to a "could not replace transaction" error,
 * this function will automatically retry with the next nonce.
 *
 * @param connector - A Dynamic connector to interact with the Ethereum network.
 * @param transaction - The transaction details.
 * @param sendTransactionHandler - A handler function to send the transaction.
 *
 * @returns A promise that resolves to the transaction response.
 */
const sendTransactionWithAutoNonce = (connector, transaction, sendTransactionHandler) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (transaction.nonce !== undefined) {
        return sendTransactionHandler(transaction);
    }
    const publicClient = yield connector.getPublicClient();
    const walletClient = yield connector.getSigner();
    const address = (yield walletClient.getAddresses())[0] || ((_a = walletClient.account) === null || _a === void 0 ? void 0 : _a.address);
    const nonce = yield publicClient.getTransactionCount({
        address,
    });
    const transactionWithNonce = Object.assign(Object.assign({}, transaction), { nonce });
    try {
        const response = yield sendTransactionHandler(transactionWithNonce);
        return response;
    }
    catch (err) {
        if (err.code ===
            MAGIC_COULD_NOT_REPLACE_TRANSACTION_ERROR_CODE) {
            const transactionWithNextNonce = Object.assign(Object.assign({}, transaction), { nonce: nonce + 1 });
            return sendTransactionHandler(transactionWithNextNonce);
        }
        throw err;
    }
});

export { MAGIC_COULD_NOT_REPLACE_TRANSACTION_ERROR_CODE, sendTransactionWithAutoNonce };
