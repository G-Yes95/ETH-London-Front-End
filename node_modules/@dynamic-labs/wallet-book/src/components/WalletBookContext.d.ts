import { WalletBookSchema } from '../schemas';
export type IWalletBookContext = {
    walletBook: WalletBookSchema;
};
export declare const WalletBookContext: import("react").Context<IWalletBookContext>;
export declare const WalletBookContextProvider: ({ walletBook, children, }: {
    walletBook: WalletBookSchema;
    children: React.ReactNode;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<IWalletBookContext>>;
