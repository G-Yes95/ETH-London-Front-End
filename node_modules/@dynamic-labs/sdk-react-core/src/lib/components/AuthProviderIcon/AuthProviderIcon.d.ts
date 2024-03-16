import { FC } from 'react';
import { Wallet } from '../../shared';
type Props = {
    iconSize?: number;
    jwt: string | undefined;
    wallet?: Wallet | null;
    showStatus?: boolean;
};
export declare const AuthProviderIcon: FC<Props>;
export {};
