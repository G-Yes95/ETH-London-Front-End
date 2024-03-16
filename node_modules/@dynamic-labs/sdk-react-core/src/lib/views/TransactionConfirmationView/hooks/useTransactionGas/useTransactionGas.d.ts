import { PublicClient, TransactionRequest } from 'viem';
type UseTransactionGasProps = {
    provider: PublicClient;
    transaction: TransactionRequest;
};
export declare const useTransactionGas: ({ provider, transaction, }: UseTransactionGasProps) => {
    gasTotalPrice: bigint | undefined;
    isGasEstimated: boolean;
    isLoading: boolean;
};
export {};
