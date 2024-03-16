const validateType = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
newValue, validationDataValue) => {
    // arrays are also objects, but we need to handle arrays
    // in a different way than objects
    if (Array.isArray(newValue) && Array.isArray(validationDataValue)) {
        if (newValue.length === 0) {
            return true;
        }
        // eslint-disable-next-line prefer-destructuring
        const itemValidationData = validationDataValue[0];
        // validate all items in newData array matches item validation data
        return Object.entries(newValue).every(([arrIndex, newValueItem]) => validateType(newValueItem, itemValidationData));
    }
    else if (typeof newValue === 'object' &&
        typeof validationDataValue === 'object' &&
        validationDataValue) {
        return Object.entries(validationDataValue).every(([key, value]) => validateType(newValue[key], value));
    }
    // the data types are not arrays or objects, just do a direct comparison
    // this will apply to primitive data types (string, number, boolean)
    return typeof newValue === typeof validationDataValue;
};

export { validateType };
