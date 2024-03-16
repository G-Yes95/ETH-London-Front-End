import { FC } from 'react';
export type SendBalanceFormValues = {
    amount: string;
    recipient: string;
};
export type Props = {
    initialValues?: SendBalanceFormValues;
    onSubmit: (formValues: SendBalanceFormValues) => void;
    balance?: number;
    decimals?: number;
};
export declare const SendBalanceForm: FC<Props>;
