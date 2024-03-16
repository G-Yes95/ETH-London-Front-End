import { useState, useCallback, useEffect } from 'react';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { isDisplayOrderPriorityForWeb3 } from '../../../../shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.js';
import { isDisplayOrderPriorityForWeb2 } from '../../../../shared/utils/functions/isDisplayOrderPriorityForWeb2/isDisplayOrderPriorityForWeb2.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';

const web2DisplayOrder = ['email', 'wallet'];
const web3DisplayOrder = ['wallet', 'email'];
const useDisplayOrderState = (projectSettings) => {
    const [displayOrder, setDisplayOrder] = useState(web3DisplayOrder);
    const setDisplayOrderPriority = useCallback((priority) => {
        if (priority === 'web3') {
            setDisplayOrder(web3DisplayOrder);
        }
        else {
            setDisplayOrder(web2DisplayOrder);
        }
    }, [setDisplayOrder]);
    useEffect(() => {
        var _a;
        const displayOrderFromApi = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _a === void 0 ? void 0 : _a.displayOrder;
        if (!displayOrderFromApi)
            return;
        if (isDisplayOrderPriorityForWeb3(displayOrderFromApi)) {
            setDisplayOrder(web3DisplayOrder);
        }
        else if (isDisplayOrderPriorityForWeb2(displayOrderFromApi)) {
            setDisplayOrder(web2DisplayOrder);
        }
    }, [projectSettings]);
    return [displayOrder, setDisplayOrderPriority];
};

export { useDisplayOrderState };
