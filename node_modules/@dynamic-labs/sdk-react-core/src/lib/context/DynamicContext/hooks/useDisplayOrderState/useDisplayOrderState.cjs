'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var isDisplayOrderPriorityForWeb3 = require('../../../../shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.cjs');
var isDisplayOrderPriorityForWeb2 = require('../../../../shared/utils/functions/isDisplayOrderPriorityForWeb2/isDisplayOrderPriorityForWeb2.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');

const web2DisplayOrder = ['email', 'wallet'];
const web3DisplayOrder = ['wallet', 'email'];
const useDisplayOrderState = (projectSettings) => {
    const [displayOrder, setDisplayOrder] = React.useState(web3DisplayOrder);
    const setDisplayOrderPriority = React.useCallback((priority) => {
        if (priority === 'web3') {
            setDisplayOrder(web3DisplayOrder);
        }
        else {
            setDisplayOrder(web2DisplayOrder);
        }
    }, [setDisplayOrder]);
    React.useEffect(() => {
        var _a;
        const displayOrderFromApi = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _a === void 0 ? void 0 : _a.displayOrder;
        if (!displayOrderFromApi)
            return;
        if (isDisplayOrderPriorityForWeb3.isDisplayOrderPriorityForWeb3(displayOrderFromApi)) {
            setDisplayOrder(web3DisplayOrder);
        }
        else if (isDisplayOrderPriorityForWeb2.isDisplayOrderPriorityForWeb2(displayOrderFromApi)) {
            setDisplayOrder(web2DisplayOrder);
        }
    }, [projectSettings]);
    return [displayOrder, setDisplayOrderPriority];
};

exports.useDisplayOrderState = useDisplayOrderState;
