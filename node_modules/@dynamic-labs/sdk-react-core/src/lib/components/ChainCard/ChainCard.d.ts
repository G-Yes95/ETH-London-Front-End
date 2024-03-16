import React, { FC } from 'react';
export type ChainCardProps = {
    chainName: string;
    onClick: () => void;
    startSlot?: React.ReactElement;
    endSlot?: React.ReactElement;
    className?: string;
};
export declare const ChainCard: FC<ChainCardProps>;
