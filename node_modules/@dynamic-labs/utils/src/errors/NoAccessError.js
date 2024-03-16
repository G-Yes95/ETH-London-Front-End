import { DynamicError } from './DynamicError.js';

class NoAccessError extends DynamicError {
    constructor({ walletPublicKey, email, }) {
        super('User does not have access');
        this.email = email;
        this.walletPublicKey = walletPublicKey;
    }
}

export { NoAccessError };
