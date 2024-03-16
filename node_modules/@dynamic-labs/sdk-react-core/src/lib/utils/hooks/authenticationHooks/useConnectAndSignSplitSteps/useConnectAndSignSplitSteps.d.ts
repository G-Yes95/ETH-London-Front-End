import { FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    fetchPublicAddressOpts?: FetchPublicAddressOpts;
    walletConnector: WalletConnector;
};
export declare const useConnectAndSignSplitSteps: () => {
    onlyConnectUser: ({ walletConnector, fetchPublicAddressOpts, }: Props) => Promise<void>;
    signAlreadyConnectedUser: ({ walletConnector, fetchPublicAddressOpts, }: Props) => Promise<void>;
};
export {};
