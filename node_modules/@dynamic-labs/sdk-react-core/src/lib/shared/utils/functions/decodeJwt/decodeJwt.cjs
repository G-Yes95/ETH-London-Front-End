'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');
var logger = require('../../../logger.cjs');

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
        const dynamicJwt = sdkApi.DynamicJwtFromJSON(json);
        return dynamicJwt;
    }
    catch (e) {
        logger.logger.error(e);
        return undefined;
    }
};

exports.decodeJwt = decodeJwt;
