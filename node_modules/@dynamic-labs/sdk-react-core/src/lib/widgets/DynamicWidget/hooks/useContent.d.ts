import { newWalletContent, usedWalletContent, switchWalletContent } from './content';
type Variant = 'new' | 'used' | 'switch' | undefined;
type Content = typeof newWalletContent & typeof usedWalletContent & typeof switchWalletContent;
export declare const useContent: (variant: Variant) => {
    content: Partial<Content>;
};
export {};
