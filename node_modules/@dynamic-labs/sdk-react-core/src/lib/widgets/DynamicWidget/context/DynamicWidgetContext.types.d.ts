import { Dispatch, RefObject, SetStateAction } from 'react';
export interface WidgetContextProps {
    availableWalletsContainerRef: RefObject<HTMLDivElement>;
    dynamicWidgetView: DynamicWidgetViews;
    goToProfileView: () => void;
    goToInitialDynamicWidgetView: () => void;
    inlineControlsRef: RefObject<HTMLDivElement>;
    isOpen: boolean;
    setDynamicWidgetView: Dispatch<SetStateAction<DynamicWidgetViews>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    widgetRef: RefObject<HTMLDivElement>;
}
export declare const DynamicPasskeyWidgetViews: readonly ["manage-passkeys"];
export type DynamicPasskeyWidgetViewsType = typeof DynamicPasskeyWidgetViews[number];
export declare const DynamicTransactionsWidgetViews: readonly ["send-balance"];
export type DynamicTransactionsWidgetViewsType = typeof DynamicTransactionsWidgetViews[number];
export type DynamicWidgetViews = 'wallets' | 'profile' | 'edit-profile' | DynamicTransactionsWidgetViewsType | DynamicPasskeyWidgetViewsType;
