'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePromise = require('../usePromise/usePromise.cjs');

const increaseGasPrice = (gasPrice, increasePercentage) => {
    const increaseFactor = 100 + increasePercentage;
    return (gasPrice * BigInt(increaseFactor)) / BigInt(100);
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
const useTransactionWithGasPrice = ({ increasePercentage = 0, provider, transaction, enabled = true, }) => {
    const isGasPriceDefinedInTransaction = Boolean(transaction.gasPrice);
    const shouldLoadGasPrice = enabled && increasePercentage > 0 && !isGasPriceDefinedInTransaction;
    const { data: gasPrice } = usePromise.usePromise(() => provider.getGasPrice(), {
        deps: [transaction, provider],
        enabled: shouldLoadGasPrice,
    });
    if (!gasPrice) {
        return transaction;
    }
    if (transaction.type === 'legacy' ||
        transaction.type === 'eip2930' ||
        transaction.type === undefined ||
        transaction.maxFeePerGas === undefined) {
        return Object.assign(Object.assign({}, transaction), { gasPrice: increaseGasPrice(gasPrice, increasePercentage) });
    }
    if (transaction.type === 'eip1559') {
        return Object.assign(Object.assign({}, transaction), { maxFeePerGas: increaseGasPrice(gasPrice, increasePercentage) });
    }
    return transaction;
};

exports.useTransactionWithGasPrice = useTransactionWithGasPrice;
