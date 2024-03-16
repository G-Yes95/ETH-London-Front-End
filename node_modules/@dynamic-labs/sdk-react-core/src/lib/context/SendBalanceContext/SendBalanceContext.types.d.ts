import { Address } from 'viem';
export type OpenSendBalanceModalProps = {
    recipientAddress?: string;
    value?: bigint;
};
export type OpenSendBalanceModal = (props?: OpenSendBalanceModalProps) => Promise<Address>;
export type SendBalanceContextProps = {
    open: OpenSendBalanceModal;
};
