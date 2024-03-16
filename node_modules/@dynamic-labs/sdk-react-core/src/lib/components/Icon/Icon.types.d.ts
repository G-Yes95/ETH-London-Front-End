import { FC, ReactElement } from 'react';
export type IconColor = 'text-primary' | 'text-secondary' | 'text-tertiary' | 'text-error' | 'brand-primary';
export type IconSize = 'xsmall' | 'small' | 'medium' | 'large';
export type IconProps = {
    children: ReactElement;
    className?: string;
    color?: IconColor;
    size?: IconSize;
};
export type IconComponent = FC<IconProps>;
