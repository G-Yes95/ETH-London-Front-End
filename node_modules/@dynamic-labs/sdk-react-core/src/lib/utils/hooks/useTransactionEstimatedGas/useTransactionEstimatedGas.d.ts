import { PublicClient, TransactionRequest } from 'viem';
/**
 * Hook to estimate the gas required for a transaction.
 *
 * This hook uses the `usePromise` hook to asynchronously estimate the gas required for a transaction.
 * It first tries to estimate the gas without the 'from' field in the transaction, as the Alchemy API
 * checks the origin address funds and can return an error if the origin wallet has no funds for the transaction.
 * If the error 'UNPREDICTABLE_GAS_LIMIT' is encountered, it tries to estimate the gas again with the
 * original transaction.
 *
 * @see {@link https://docs.alchemy.com/reference/eth-estimategas}
 * @see {@link https://docs.ethers.org/v5/troubleshooting/errors/#help-UNPREDICTABLE_GAS_LIMIT}
 *
 * @param {ethers.providers.Web3Provider} provider - The Web3 provider to use for estimating the gas.
 * @param {ethers.utils.Deferrable<ethers.providers.TransactionRequest>} transaction - The transaction for
 * which to estimate the gas.
 *
 * @returns {PromiseState<ethers.BigNumber>} A promise that resolves to the estimated gas for the transaction.
 */
export declare const useTransactionEstimatedGas: (provider: PublicClient, transaction: TransactionRequest) => import("../usePromise").PromiseState<bigint, Error>;
