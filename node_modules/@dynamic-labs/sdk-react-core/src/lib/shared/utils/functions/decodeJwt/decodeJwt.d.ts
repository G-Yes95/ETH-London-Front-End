import { DynamicJwt } from '@dynamic-labs/sdk-api';
export declare const decodeJwt: (token: string | null | undefined) => Omit<DynamicJwt, 'jwt'> | undefined;
