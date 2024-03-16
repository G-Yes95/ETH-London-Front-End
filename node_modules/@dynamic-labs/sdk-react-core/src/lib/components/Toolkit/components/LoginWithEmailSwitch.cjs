'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var Switch = require('../../Switch/Switch.cjs');

const LoginWithEmailSwitch = () => {
    const { loginWithEmail, setLogInWithEmail } = useInternalDynamicContext.useInternalDynamicContext();
    return (jsxRuntime.jsx(Switch.Switch, { firstButton: {
            active: loginWithEmail,
            handleButtonClick: () => setLogInWithEmail(true),
            name: 'True',
        }, secondButton: {
            active: !loginWithEmail,
            handleButtonClick: () => setLogInWithEmail(false),
            name: 'False',
        } }));
};

exports.LoginWithEmailSwitch = LoginWithEmailSwitch;
