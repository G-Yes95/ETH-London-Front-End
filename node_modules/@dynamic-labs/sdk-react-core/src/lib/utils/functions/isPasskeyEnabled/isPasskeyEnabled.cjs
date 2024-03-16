'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');

const isUserVerifyingPlatformAuthenticatorAvailable = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    return (typeof ((_a = window === null || window === void 0 ? void 0 : window.PublicKeyCredential) === null || _a === void 0 ? void 0 : _a.isUserVerifyingPlatformAuthenticatorAvailable) === 'function' &&
        (yield ((_b = window === null || window === void 0 ? void 0 : window.PublicKeyCredential) === null || _b === void 0 ? void 0 : _b.isUserVerifyingPlatformAuthenticatorAvailable()))) ||
        false;
});
// we couldn't find a reliable if passkey is enabled on Windows, so we're just going to assume it is
// isUserVerifyingPlatformAuthenticatorAvailable returns false, even when passkey works
const isPasskeyEnabled = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return (yield isUserVerifyingPlatformAuthenticatorAvailable()) ||
        utils.isWindows() ||
        false;
});

exports.isPasskeyEnabled = isPasskeyEnabled;
