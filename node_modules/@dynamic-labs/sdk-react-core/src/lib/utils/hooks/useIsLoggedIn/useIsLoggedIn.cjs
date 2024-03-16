'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');

const useIsLoggedIn = () => {
    const { user, primaryWallet, authMode } = useInternalDynamicContext.useInternalDynamicContext();
    // a user is set even when on connect-only mode if signing in with social,
    // but it won't have a primaryWallet in this case
    return (Boolean(user) || (authMode === 'connect-only' && Boolean(primaryWallet)));
};

exports.useIsLoggedIn = useIsLoggedIn;
