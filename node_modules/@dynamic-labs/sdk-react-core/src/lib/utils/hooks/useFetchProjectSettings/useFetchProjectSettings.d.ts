import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { WalletConnectorsMethod } from '@dynamic-labs/wallet-connector-core';
import { DynamicEventsCallbacks } from '../../../shared';
import { DynamicContextProps } from '../../../context/DynamicContext';
export type fetchProjectSettingsProps = {
    authToken: string | undefined;
    environmentId: string;
    maxRetries?: number;
    dynamicContextProps: Pick<DynamicContextProps, 'settings'>;
};
export declare const useFetchProjectSettings: ({ authToken, environmentId, maxRetries, dynamicContextProps, }: fetchProjectSettingsProps) => {
    isLoading: boolean;
    projectSettings: ProjectSettings | undefined;
    removeLsSettings: () => void;
};
export declare const serializeEventsCallbacks: (eventsCallbacks: DynamicEventsCallbacks | undefined) => string[] | undefined;
export declare const serializeWalletConnectors: (walletConnectors?: WalletConnectorsMethod[]) => string[] | undefined;
