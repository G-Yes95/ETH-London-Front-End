'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isDisplayOrderPriorityForWeb2 = (displayOrder) => {
    if (displayOrder.length !== 2)
        return false;
    const [firstPriority, secondPriority] = displayOrder;
    return firstPriority === 'email' && secondPriority === 'wallet';
};

exports.isDisplayOrderPriorityForWeb2 = isDisplayOrderPriorityForWeb2;
