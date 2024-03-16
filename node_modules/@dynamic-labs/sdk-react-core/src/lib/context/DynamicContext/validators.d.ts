import { LocalStorageNetworks, LocalStorageNonce, LocalStorageSettings, UserProfile } from '../../shared';
export declare const validateAuthUser: (data: UserProfile | undefined) => boolean;
export declare const validateLocalStorageExpiry: (data: LocalStorageNonce | LocalStorageNetworks | LocalStorageSettings | undefined) => boolean;
