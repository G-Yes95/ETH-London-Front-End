import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';

const useIsLoggedIn = () => {
    const { user, primaryWallet, authMode } = useInternalDynamicContext();
    // a user is set even when on connect-only mode if signing in with social,
    // but it won't have a primaryWallet in this case
    return (Boolean(user) || (authMode === 'connect-only' && Boolean(primaryWallet)));
};

export { useIsLoggedIn };
