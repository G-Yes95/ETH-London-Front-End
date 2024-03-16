'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decodeJwt = require('../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../ViewContext/ViewContext.cjs');
require('react');
require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../utils/constants/localStorage.cjs');
require('../../utils/constants/colors.cjs');
var localStorage = require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var getAuthToken = require('../../utils/functions/getAuthToken/getAuthToken.cjs');

let logoutTimer;
let dynamicContextSettingsTimer;
let wagmiSettingsTimer;
const sdkSettingsTimeout = 24 * 60 * 60 * 1000; // 24 hours
const isAuthTokenExpired = (token) => {
    const decoded = decodeJwt.decodeJwt(token);
    if (!decoded) {
        return true;
    }
    if (!decoded.exp) {
        return true;
    }
    const expirationTime = new Date(decoded.exp * 1000).getTime();
    const currentTime = new Date().getTime();
    if (currentTime >= expirationTime) {
        return true;
    }
    return false;
};
const initExpirationTime = (logout) => {
    const decodedJwt = decodeJwt.decodeJwt(getAuthToken.getAuthToken());
    if (!decodedJwt)
        return clearTimeout(logoutTimer);
    const tokenExp = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.exp;
    if (!tokenExp) {
        clearTimeout(logoutTimer);
        return logout();
    }
    const expirationTime = new Date(tokenExp * 1000).getTime();
    const currentTime = new Date().getTime();
    if (currentTime >= expirationTime) {
        clearTimeout(logoutTimer);
        return logout();
    }
    const expirationTimeInMs = expirationTime - currentTime;
    // If value is greater than 2,147,483,647 ms (about 24.8 days), there's an integer overflow
    // and the callback will fire imediately
    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#maximum_delay_value
    const expiryTimeout = Math.min(expirationTimeInMs, 2147483647);
    logoutTimer = setTimeout(logout, expiryTimeout);
};
const getInitialView = ({ connectedWallets, isBridgeFlow, isFullyConnected, isAuthenticated, isMultiWalletEnabled, }) => {
    // when multiwallet enabled, and user wants to link wallet
    // show wallet-list view
    if (isFullyConnected || isAuthenticated) {
        return isMultiWalletEnabled ? 'multi-wallet-wallet-list' : 'wallet-list';
    }
    if (isBridgeFlow && !connectedWallets.length) {
        return 'bridge-welcome';
    }
    return 'login-with-email-or-wallet';
};
const setDynamicContextSessionSettings = () => {
    setSessionSettings(localStorage$1.DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS);
    dynamicContextSettingsTimer = setTimeout(isDynamicContextSessionSettingExpired, sdkSettingsTimeout);
};
const setWagmiSessionSettings = () => {
    setSessionSettings(localStorage$1.WAGMI_LAST_SESSION_SETTINGS);
    wagmiSettingsTimer = setTimeout(isWagmiSessionSettingExpired, sdkSettingsTimeout);
};
const setSessionSettings = (lsKey) => {
    const timestamp = new Date().getTime();
    localStorage.LocalStorage.setToLS(lsKey, timestamp.toString());
};
const isDynamicContextSessionSettingExpired = () => isSettingExpired(localStorage$1.DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS, dynamicContextSettingsTimer);
const isWagmiSessionSettingExpired = () => isSettingExpired(localStorage$1.WAGMI_LAST_SESSION_SETTINGS, wagmiSettingsTimer);
const isSettingExpired = (lsKey, timer) => {
    const lastSentTime = localStorage.LocalStorage.getFromLS(lsKey);
    // should set new time
    if (!lastSentTime) {
        return true;
    }
    const lastSentTimestamp = parseInt(lastSentTime);
    const currentTime = new Date().getTime();
    if (currentTime - lastSentTimestamp > sdkSettingsTimeout) {
        // Reset session-related data here
        clearTimeout(timer);
        localStorage.LocalStorage.removeFromLS(lsKey);
        return true;
    }
    return false;
};

exports.getInitialView = getInitialView;
exports.initExpirationTime = initExpirationTime;
exports.isAuthTokenExpired = isAuthTokenExpired;
exports.isDynamicContextSessionSettingExpired = isDynamicContextSessionSettingExpired;
exports.isWagmiSessionSettingExpired = isWagmiSessionSettingExpired;
exports.sdkSettingsTimeout = sdkSettingsTimeout;
exports.setDynamicContextSessionSettings = setDynamicContextSessionSettings;
exports.setWagmiSessionSettings = setWagmiSessionSettings;
