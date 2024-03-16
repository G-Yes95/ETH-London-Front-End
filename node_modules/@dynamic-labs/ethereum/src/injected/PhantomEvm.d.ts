import LegacyInjectedWalletBase from './LegacyInjectedWalletBase';
export declare class PhantomEvm extends LegacyInjectedWalletBase {
    name: string;
    fetchPublicAddress(): Promise<string | undefined>;
}
