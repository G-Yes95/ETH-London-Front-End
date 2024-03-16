import { FC } from 'react';
import { Address } from 'viem';
type SendBalanceModalProps = {
    initialRecipientAddress?: string;
    initialValue?: bigint;
    onReject: (error: unknown) => void;
    onSuccess: (transaction: Address) => void;
};
export declare const SendBalanceModal: FC<SendBalanceModalProps>;
export {};
