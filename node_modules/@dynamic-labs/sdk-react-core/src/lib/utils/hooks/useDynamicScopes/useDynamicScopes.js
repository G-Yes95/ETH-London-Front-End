import { useMemo } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';

// This hook can be used to get all of the user's scopes (nft/token gates)
// and check if the user has a specific scopes with some logic AND/OR (nft/token gate)
const useDynamicScopes = () => {
    const { decodedAuthToken } = useInternalDynamicContext();
    const userScopes = useMemo(() => {
        const { scope } = decodedAuthToken || {};
        if (!scope)
            return [];
        // We need to split the scopes string into an array of scopes
        // because the scopes string is a space separated string of scopes
        // e.g. '"scope": "customerservice marketing tech"'
        return scope.split(' ');
    }, [decodedAuthToken]);
    // If customer will set scopes to an empty string it will return false
    const userHasScopes = (scopes, logicOperator = 'OR') => {
        if (!scopes.length)
            return false;
        if (typeof scopes === 'string')
            scopes = scopes.split(' ');
        if (logicOperator === 'AND') {
            // If the logic operator is AND, the user must have all of the scopes
            // If the logic operator is OR, the user must have at least one of the scopes
            return scopes.every((scope) => Boolean(userScopes.includes(scope)));
        }
        return scopes.some((scope) => Boolean(userScopes.includes(scope)));
    };
    return {
        userHasScopes,
        userScopes,
    };
};

export { useDynamicScopes };
