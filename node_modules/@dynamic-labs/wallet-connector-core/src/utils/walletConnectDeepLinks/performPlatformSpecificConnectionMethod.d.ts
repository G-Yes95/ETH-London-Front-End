import type { WalletSchema } from '@dynamic-labs/wallet-book';
import type { FetchPublicAddressOpts } from '../../lib';
import { DeepLinkVariant } from './walletConnectDeepLinks';
export declare const performPlatformSpecificConnectionMethod: (uri: string, metadata: WalletSchema, opts: Pick<FetchPublicAddressOpts, 'onDesktopUri' | 'onDisplayUri'>, preference: DeepLinkVariant) => void;
