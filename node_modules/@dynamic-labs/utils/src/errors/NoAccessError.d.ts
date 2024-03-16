import { DynamicError } from './DynamicError';
export declare class NoAccessError extends DynamicError {
    walletPublicKey?: string;
    email?: string;
    constructor({ walletPublicKey, email, }: {
        email?: string;
        walletPublicKey?: string;
    });
}
