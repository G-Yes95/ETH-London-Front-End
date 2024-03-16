import { FC, MouseEventHandler } from 'react';
import { Address } from 'viem';
export type SendBalanceViewProps = {
    displayPoweredByDynamicFooter?: boolean;
    initialRecipientAddress?: string;
    initialValue?: bigint;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onDone?: () => void;
    onError?: (error: unknown) => void;
    onSuccess?: (transaction: Address) => void;
};
export declare const SendBalanceView: FC<SendBalanceViewProps>;
