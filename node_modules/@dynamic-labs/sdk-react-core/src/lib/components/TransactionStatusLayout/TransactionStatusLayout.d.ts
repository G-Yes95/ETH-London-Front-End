import { FC, MouseEventHandler, ReactNode } from 'react';
export type Props = {
    NetworkIcon?: ReactNode;
    amount: string;
    destinationAddress: string;
    displayPoweredByDynamicFooter?: boolean;
    networkCurrency: string;
    networkName: string;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onDone: MouseEventHandler<HTMLButtonElement>;
};
export declare const TransactionStatusLayout: FC<Props>;
