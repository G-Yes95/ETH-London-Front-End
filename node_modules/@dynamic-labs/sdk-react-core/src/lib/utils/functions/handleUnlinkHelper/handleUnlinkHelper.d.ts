import { UserProfile } from '../../../shared';
type HandleUnlinkHelperArgs = {
    environmentId: string;
    primaryWalletId: string | undefined;
    walletId: string;
};
/**
 * A helper function that wraps the unlinkWallet function from the API.
 * This function will store the updated JWT in local storage and return the decoded JWT.
 *
 * @throws Error if the authentication call returns no or invalid JWT
 */
export declare const handleUnlinkHelper: ({ environmentId, primaryWalletId, walletId, }: HandleUnlinkHelperArgs) => Promise<UserProfile | undefined>;
export {};
