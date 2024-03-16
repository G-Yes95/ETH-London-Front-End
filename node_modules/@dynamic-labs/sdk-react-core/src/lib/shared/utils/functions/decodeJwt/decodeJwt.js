import { DynamicJwtFromJSON } from '@dynamic-labs/sdk-api';
import { logger } from '../../../logger.js';

const decodeJwt = (token) => {
    var _a;
    if (!token)
        return undefined;
    try {
        const base64 = (_a = token.split('.')[1]) === null || _a === void 0 ? void 0 : _a.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = base64 &&
            decodeURIComponent(atob(base64)
                .split('')
                .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join(''));
        const json = JSON.parse(jsonPayload);
        const dynamicJwt = DynamicJwtFromJSON(json);
        return dynamicJwt;
    }
    catch (e) {
        logger.error(e);
        return undefined;
    }
};

export { decodeJwt };
