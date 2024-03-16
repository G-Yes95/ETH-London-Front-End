import { PublicClient, TransactionRequest } from 'viem';
type UseTransactionWithGasPriceProps = {
    provider: PublicClient;
    transaction: TransactionRequest;
    increasePercentage?: number;
    enabled?: boolean;
};
/**
 * A React Hook that returns a transaction object with the gas price set to the current gas price from the provider.
 * The gas price is increased by a certain percentage specified by the user. The hook also allows the user to enable
 * or disable this functionality.
 *
 * @param {Object} props - The properties for the hook.
 * @param {PublicClient} props.provider - The provider to use for getting the current gas price.
 * @param {TransactionRequest} props.transaction - The transaction object.
 * @param {number} props.increasePercentage - The percentage by which to increase the current gas price.
 * @param {boolean} [props.enabled=true] - A flag to enable or disable the gas price increase functionality.
 *
 * @returns {TransactionRequest} A new transaction object with the gas price.
 * If the `enabled` flag is set to false, or if the gas price is not available, or if the transaction already has a
 * gas price set, the original transaction object is returned.
 *
 * @example
 * const updatedTransaction = useTransactionWithGasPrice({
 *   provider: myProvider,
 *   transaction: myTransaction,
 *   increasePercentage: 10,
 *   enabled: true,
 * });
 */
export declare const useTransactionWithGasPrice: ({ increasePercentage, provider, transaction, enabled, }: UseTransactionWithGasPriceProps) => TransactionRequest;
export {};
