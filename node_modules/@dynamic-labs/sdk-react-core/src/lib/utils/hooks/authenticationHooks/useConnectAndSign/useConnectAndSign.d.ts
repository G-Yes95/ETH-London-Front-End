import { FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    fetchPublicAddressOpts?: FetchPublicAddressOpts;
    walletConnector: WalletConnector;
};
export declare const useConnectAndSign: ({ shouldUpdateWallets, shouldCallCallback, }?: {
    shouldUpdateWallets?: boolean | undefined;
    shouldCallCallback?: boolean | undefined;
}) => ({ walletConnector, fetchPublicAddressOpts, }: Props) => Promise<void>;
export {};
