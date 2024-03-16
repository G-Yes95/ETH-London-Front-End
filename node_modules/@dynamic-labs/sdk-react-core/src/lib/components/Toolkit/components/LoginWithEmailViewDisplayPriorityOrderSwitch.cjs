'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var isDisplayOrderPriorityForWeb3 = require('../../../shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.cjs');
var isDisplayOrderPriorityForWeb2 = require('../../../shared/utils/functions/isDisplayOrderPriorityForWeb2/isDisplayOrderPriorityForWeb2.cjs');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var Switch = require('../../Switch/Switch.cjs');

const LoginWithEmailViewDisplayPriorityOrderSwitch = () => {
    const { authorizationViewDisplayOrder, setAuthorizationViewDisplayOrder, loginWithEmail, } = useInternalDynamicContext.useInternalDynamicContext();
    return (jsxRuntime.jsx(Switch.Switch, { disabled: !loginWithEmail, firstButton: {
            active: isDisplayOrderPriorityForWeb2.isDisplayOrderPriorityForWeb2(authorizationViewDisplayOrder),
            handleButtonClick: () => setAuthorizationViewDisplayOrder('web2'),
            name: 'Email',
        }, secondButton: {
            active: isDisplayOrderPriorityForWeb3.isDisplayOrderPriorityForWeb3(authorizationViewDisplayOrder),
            handleButtonClick: () => setAuthorizationViewDisplayOrder('web3'),
            name: 'Wallet',
        } }));
};

exports.LoginWithEmailViewDisplayPriorityOrderSwitch = LoginWithEmailViewDisplayPriorityOrderSwitch;
