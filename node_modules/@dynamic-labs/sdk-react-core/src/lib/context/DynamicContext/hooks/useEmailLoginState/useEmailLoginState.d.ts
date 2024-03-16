import { Dispatch, SetStateAction } from 'react';
import { Provider } from '@dynamic-labs/sdk-api';
import { UserProfile } from '../../../../shared';
export declare const useEmailLoginState: (providers: Provider[], user: UserProfile | undefined) => [boolean, Dispatch<SetStateAction<boolean>>];
