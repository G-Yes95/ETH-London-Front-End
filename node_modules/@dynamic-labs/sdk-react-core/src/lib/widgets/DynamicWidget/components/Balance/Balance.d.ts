/// <reference types="react" />
import { WalletConnector } from '../../../../..';
type Props = {
    address: string;
    className?: string;
    connector: WalletConnector;
    network: number | string | undefined;
};
export declare const Balance: ({ connector, address, network, className }: Props) => JSX.Element | null;
export {};
