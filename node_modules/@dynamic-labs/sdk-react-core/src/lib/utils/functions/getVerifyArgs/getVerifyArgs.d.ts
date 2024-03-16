import { FetchPublicAddressOpts } from '@dynamic-labs/wallet-connector-core';
import { WalletConnector } from '../../../..';
import { WalletProvider } from '../../../shared';
type Props = {
    displaySiweStatement: boolean;
    environmentId: string;
    fetchPublicAddressOpts?: FetchPublicAddressOpts;
    nonce: string;
    publicWalletAddress: string;
    siweStatement: string;
    skipEmptyAccountCheck?: boolean;
    walletConnector: WalletConnector;
    walletProvider: WalletProvider;
};
export declare const getVerifyArgs: ({ walletConnector, nonce, walletProvider, environmentId, displaySiweStatement, skipEmptyAccountCheck, siweStatement, publicWalletAddress, }: Props) => Promise<{
    chain: "ETH" | "FLOW" | "SOL" | "EVM" | "ALGO" | "STARK" | "ATOM" | "COSMOS" | undefined;
    messageToSign: string;
    network: string;
    publicWalletAddress: string;
    signedMessage: string;
    skipEmptyAccountCheck: boolean | undefined;
    walletName: string;
    walletProvider: "browserExtension" | "custodialService" | "walletConnect" | "qrCode" | "deepLink" | "embeddedWallet" | "smartContractWallet";
}>;
export {};
