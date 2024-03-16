import { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react';
type OverlayCardProps = {
    isOpen: boolean;
    onClickOverlay?: MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
    className?: string;
    maxHeight?: number;
};
export declare const OverlayCard: FC<PropsWithChildren<OverlayCardProps>>;
export {};
