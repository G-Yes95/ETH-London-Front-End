import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    disablePadding?: boolean;
    onBackdropClick?: VoidFunction;
    showCloseButton?: boolean;
};
export declare const WidgetPortal: ({ children, onBackdropClick, disablePadding, showCloseButton, }: Props) => JSX.Element;
export {};
