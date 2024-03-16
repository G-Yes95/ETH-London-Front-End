import { DynamicJwt, JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { UserProfile } from '../../../types';
export declare const lastAuthenticatedAccount: (dynamicJwtOrUser: DynamicJwt | UserProfile) => JwtVerifiedCredential | undefined;
