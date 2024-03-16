import { IEmailWalletConnector, IPasskeyWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletOption } from '../../../../shared';
export declare const findPasskeyEmailWalletConnector: (wallets: WalletOption[]) => (IPasskeyWalletConnector & IEmailWalletConnector) | undefined;
