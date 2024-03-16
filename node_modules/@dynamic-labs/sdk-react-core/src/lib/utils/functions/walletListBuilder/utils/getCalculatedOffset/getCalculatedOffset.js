import { findLastPriorityIndex } from '../findLastWalletIndex/findLastPriorityIndex.js';

const getCalculatedOffset = ({ hasWalletFilter, defaultOffset, list, priorityList, }) => {
    const lastPriorityIndex = findLastPriorityIndex(list, priorityList);
    if (hasWalletFilter ||
        list.length <= defaultOffset ||
        lastPriorityIndex === -1) {
        return defaultOffset;
    }
    return lastPriorityIndex + 1;
};

export { getCalculatedOffset };
