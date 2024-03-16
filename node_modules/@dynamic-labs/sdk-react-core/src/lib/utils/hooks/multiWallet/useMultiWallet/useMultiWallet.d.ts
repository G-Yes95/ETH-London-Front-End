export declare const useMultiWallet: (toolkitEnabled: boolean, multiWalletSettings?: boolean) => {
    multiWallet: boolean;
    setMultiWallet: (value: boolean | ((val: boolean) => boolean)) => void;
};
