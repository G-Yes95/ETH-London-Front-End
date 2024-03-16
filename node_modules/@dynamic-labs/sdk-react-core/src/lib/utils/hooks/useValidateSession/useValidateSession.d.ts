import { UserProfile } from '../../../shared';
import { WalletConnector } from '../../../..';
type Props = {
    handleLogOut: () => Promise<void>;
    user: UserProfile | undefined;
    authToken: string | undefined;
    walletConnectV1Bridge: string | undefined;
    walletConnectors: WalletConnector[] | undefined;
    wcVersion: number | undefined;
};
export declare const useValidateSession: ({ handleLogOut, user, authToken, walletConnectV1Bridge, walletConnectors, wcVersion, }: Props) => void;
export {};
