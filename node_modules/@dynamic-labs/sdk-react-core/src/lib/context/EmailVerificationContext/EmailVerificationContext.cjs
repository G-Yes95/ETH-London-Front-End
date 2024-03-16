'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const EmailVerificationContext = React.createContext(undefined);
// Context used to hold verificationUUID & email between views.
const EmailVerificationContextProvider = ({ children, }) => {
    const [email, setEmail] = React.useState(undefined);
    const [verificationUUID, setVerificationUUID] = React.useState(undefined);
    const value = React.useMemo(() => ({
        email,
        setEmail,
        setVerificationUUID,
        verificationUUID,
    }), [email, verificationUUID]);
    return (jsxRuntime.jsx(EmailVerificationContext.Provider, { value: value, children: children }));
};
const useEmailVerificationContext = () => {
    const context = React.useContext(EmailVerificationContext);
    if (context === undefined) {
        throw new Error('usage of useEmailVerificationContext not wrapped in `EmailVerificationContextProvider`.');
    }
    return context;
};

exports.EmailVerificationContext = EmailVerificationContext;
exports.EmailVerificationContextProvider = EmailVerificationContextProvider;
exports.useEmailVerificationContext = useEmailVerificationContext;
