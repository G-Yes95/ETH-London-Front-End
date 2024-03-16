import { IEmailWalletConnector } from './IEmailWalletConnector';
export interface IEmailOTPWalletConnector extends IEmailWalletConnector {
    verifyOneTimePassword(otp: string): Promise<boolean>;
}
