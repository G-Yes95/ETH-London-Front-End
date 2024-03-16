import { FC, PropsWithChildren } from 'react';
import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { ITransitionOptions } from '../../components/Transition/transition.type';
import { ModalProps } from '../../shared/types';
type DynamicAuthModalProps = PropsWithChildren & ModalProps & {
    className?: string;
    transitionProps?: Pick<ITransitionOptions, 'isShown'>;
    walletConnector?: WalletConnector | null;
    projectSettings?: ProjectSettings;
};
export declare const DynamicAuthModal: FC<DynamicAuthModalProps>;
export {};
