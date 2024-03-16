import { TransactionRequest, Address } from 'viem';
import { WalletConnector } from '../../../..';
export declare const MAGIC_COULD_NOT_REPLACE_TRANSACTION_ERROR_CODE = -32603;
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
export declare const sendTransactionWithAutoNonce: (connector: WalletConnector, transaction: TransactionRequest, sendTransactionHandler: (transaction: TransactionRequest) => Promise<Address>) => Promise<`0x${string}`>;
