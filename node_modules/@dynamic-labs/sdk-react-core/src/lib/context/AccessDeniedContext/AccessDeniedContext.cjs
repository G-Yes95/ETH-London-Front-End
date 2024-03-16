'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const AccessDeniedContext = React.createContext(undefined);
const AccessDeniedContextProvider = ({ children, }) => {
    const [deniedAddress, setDeniedAddress] = React.useState('');
    const [deniedOauthProvider, setDeniedOauthProvider] = React.useState(undefined);
    const value = React.useMemo(() => ({
        deniedAddress,
        deniedOauthProvider,
        setDeniedAddress,
        setDeniedOauthProvider,
    }), [deniedAddress, deniedOauthProvider]);
    return (jsxRuntime.jsx(AccessDeniedContext.Provider, { value: value, children: children }));
};
const useAccessDeniedContext = () => {
    const context = React.useContext(AccessDeniedContext);
    if (context === undefined) {
        throw new Error('usage of useAccessDeniedContext not wrapped in `AccessDeniedContextProvider`.');
    }
    return context;
};

exports.AccessDeniedContext = AccessDeniedContext;
exports.AccessDeniedContextProvider = AccessDeniedContextProvider;
exports.useAccessDeniedContext = useAccessDeniedContext;
