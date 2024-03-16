import EventEmitter from 'eventemitter3';
import { Wallet } from '../../../shared';
/** Maps internal event names to their listeners */
export type InternalEventMap = {
    emailVerificationResult: (param: boolean, email: string) => void;
    embeddedWalletCreated: (wallet: Wallet) => void;
    embeddedWalletFailed: (error: unknown) => void;
    passkeyRecoveryCompleted: (wallet: Wallet) => void;
    passkeyRecoveryFailed: (error: unknown) => void;
    logout: () => void;
};
export type InternalEventEmitter = EventEmitter<InternalEventMap>;
export declare const getInternalEvents: () => InternalEventEmitter;
