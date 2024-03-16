import { FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    fetchPublicAddressOpts?: FetchPublicAddressOpts;
    walletConnector: WalletConnector;
};
export declare const useSignConnectOnlyUser: () => ({ walletConnector, fetchPublicAddressOpts, }: Props) => Promise<void>;
export {};
