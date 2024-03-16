'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findLastPriorityIndex = require('../findLastWalletIndex/findLastPriorityIndex.cjs');

const getCalculatedOffset = ({ hasWalletFilter, defaultOffset, list, priorityList, }) => {
    const lastPriorityIndex = findLastPriorityIndex.findLastPriorityIndex(list, priorityList);
    if (hasWalletFilter ||
        list.length <= defaultOffset ||
        lastPriorityIndex === -1) {
        return defaultOffset;
    }
    return lastPriorityIndex + 1;
};

exports.getCalculatedOffset = getCalculatedOffset;
