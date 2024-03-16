import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
export declare const getWalletVerifiedCredential: (walletAddress: string | undefined, verifiedCredentials: JwtVerifiedCredential[] | undefined, walletChain: string) => JwtVerifiedCredential | undefined;
