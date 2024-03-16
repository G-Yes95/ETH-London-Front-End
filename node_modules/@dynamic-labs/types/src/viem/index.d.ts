import { TransactionRequest, PublicClient, Address } from 'viem';
export type WalletUiUtils<TConnector> = {
    disabledConfirmationOnce: () => void;
    sendTransaction: (props: {
        connector: TConnector;
        handler: (transaction: TransactionRequest) => Promise<Address>;
        transaction: TransactionRequest;
        provider: PublicClient;
    }) => Promise<Address>;
    signMessage: (props: {
        connector: TConnector;
        handler: () => Promise<string>;
        message: string | ArrayLike<number>;
        provider: PublicClient;
    }) => Promise<string>;
};
