import { ReactElement } from 'react';
export type DotsMenuOption = {
    Icon: ReactElement | null;
    callback: VoidFunction;
    text: string;
    hide?: boolean;
};
type Props = {
    options: DotsMenuOption[];
    direction?: 'right' | 'left';
    buttonClassName?: string;
    buttonClassNameWithOpenMenu?: string;
};
export declare const DotsMenu: ({ options, buttonClassName, buttonClassNameWithOpenMenu, direction, }: Props) => JSX.Element;
export {};
