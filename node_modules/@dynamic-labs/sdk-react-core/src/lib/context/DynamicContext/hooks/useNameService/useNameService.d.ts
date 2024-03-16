import { NameServiceData } from '@dynamic-labs/sdk-api';
import { Wallet } from '../../../../shared';
type Props = {
    authToken: string | undefined;
    currentWallet: Wallet | null;
};
export declare const useNameService: ({ currentWallet, authToken }: Props) => {
    getNameService: (address?: string) => Promise<NameServiceData | undefined>;
    removeConnectedNameService: () => void;
};
export {};
