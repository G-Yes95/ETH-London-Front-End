import { type FC } from 'react';
export declare const ICONIC_SPRITE_URL: `https://iconic.dynamic-static-assets.com/icons/sprite.svg?v=${string}`;
export type Iconic = FC<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}> & {
    iconName: string;
    sourcePath: string;
};
export declare const createIconic: (props: {
    sourcePath: string;
    iconName: string;
    alt: string;
}) => Iconic;
