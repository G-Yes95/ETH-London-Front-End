import { ReactElement, ReactNode } from 'react';
import { WalletOption } from '../../../shared';
export type WalletListItemProps = {
    onResetSearchValue?: (newSearchValue: string) => void;
    tile?: WalletListItemTile;
    usingMultiWallet: boolean;
    wallet: WalletOption;
    disabled?: boolean;
};
export type WalletListItemComponent = (props: WalletListItemProps) => ReactElement;
export type WalletListItemTileProps = {
    leading: ReactNode;
    name: string;
    onClick: () => void;
    trailing: ReactNode;
};
export type WalletListItemTile = (props: WalletListItemTileProps) => ReactElement;
