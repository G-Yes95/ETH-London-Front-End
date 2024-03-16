import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isWindows } from '@dynamic-labs/utils';

const isUserVerifyingPlatformAuthenticatorAvailable = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    return (typeof ((_a = window === null || window === void 0 ? void 0 : window.PublicKeyCredential) === null || _a === void 0 ? void 0 : _a.isUserVerifyingPlatformAuthenticatorAvailable) === 'function' &&
        (yield ((_b = window === null || window === void 0 ? void 0 : window.PublicKeyCredential) === null || _b === void 0 ? void 0 : _b.isUserVerifyingPlatformAuthenticatorAvailable()))) ||
        false;
});
// we couldn't find a reliable if passkey is enabled on Windows, so we're just going to assume it is
// isUserVerifyingPlatformAuthenticatorAvailable returns false, even when passkey works
const isPasskeyEnabled = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield isUserVerifyingPlatformAuthenticatorAvailable()) ||
        isWindows() ||
        false;
});

export { isPasskeyEnabled };
