import { WalletConnector } from '.';
export interface WalletConnectorExtension {
    extend(connector: WalletConnector): void;
    name: string;
}
