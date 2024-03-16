import { jsx } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { isDisplayOrderPriorityForWeb3 } from '../../../shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.js';
import { isDisplayOrderPriorityForWeb2 } from '../../../shared/utils/functions/isDisplayOrderPriorityForWeb2/isDisplayOrderPriorityForWeb2.js';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { Switch } from '../../Switch/Switch.js';

const LoginWithEmailViewDisplayPriorityOrderSwitch = () => {
    const { authorizationViewDisplayOrder, setAuthorizationViewDisplayOrder, loginWithEmail, } = useInternalDynamicContext();
    return (jsx(Switch, { disabled: !loginWithEmail, firstButton: {
            active: isDisplayOrderPriorityForWeb2(authorizationViewDisplayOrder),
            handleButtonClick: () => setAuthorizationViewDisplayOrder('web2'),
            name: 'Email',
        }, secondButton: {
            active: isDisplayOrderPriorityForWeb3(authorizationViewDisplayOrder),
            handleButtonClick: () => setAuthorizationViewDisplayOrder('web3'),
            name: 'Wallet',
        } }));
};

export { LoginWithEmailViewDisplayPriorityOrderSwitch };
