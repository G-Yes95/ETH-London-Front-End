const isDisplayOrderPriorityForWeb2 = (displayOrder) => {
    if (displayOrder.length !== 2)
        return false;
    const [firstPriority, secondPriority] = displayOrder;
    return firstPriority === 'email' && secondPriority === 'wallet';
};

export { isDisplayOrderPriorityForWeb2 };
