/// <reference types="react" />
import { Icon } from '../../shared';
type Props = {
    Icon: Icon | string;
    InnerIcon?: Icon;
    containerClassName?: string;
    iconSize?: number;
    primaryWalletKey?: string;
    variant?: 'green' | 'red';
};
export declare const IconWithStatus: ({ Icon, InnerIcon, primaryWalletKey, containerClassName, iconSize, variant, }: Props) => JSX.Element;
export {};
