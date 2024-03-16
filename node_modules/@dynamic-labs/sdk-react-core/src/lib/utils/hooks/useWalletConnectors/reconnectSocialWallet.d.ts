import { Wallet } from '../../../shared';
/**
 * This function will use a referenced account to kick off the social wallet
 * authentication. This is useful in the multiwallet scenario where the user
 * wants to set their disconnected social wallet as their primary wallet, in
 * which case the wallet needs to be reconnected
 */
export declare const reconnectSocialWallet: (jwt: string | undefined, wallet: Wallet) => Promise<void>;
