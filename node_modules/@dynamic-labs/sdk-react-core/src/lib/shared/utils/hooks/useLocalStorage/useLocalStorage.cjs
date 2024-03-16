'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var logger = require('../../../logger.cjs');
var localStorage = require('../../classes/storage/localStorage.cjs');

const useLocalStorage = (key, initialValue, valueValidator, otherKeysToRemove) => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = localStorage.LocalStorage.getFromLS(key);
            if (Boolean(item) && valueValidator && !valueValidator(item)) {
                localStorage.LocalStorage.removeFromLS(key);
                otherKeysToRemove === null || otherKeysToRemove === void 0 ? void 0 : otherKeysToRemove.forEach((k) => localStorage.LocalStorage.removeFromLS(k));
                return initialValue;
            }
            else {
                return item !== null && item !== void 0 ? item : initialValue;
            }
        }
        catch (error) {
            logger.logger.error(error);
            return initialValue;
        }
    });
    const setValue = React.useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.LocalStorage.setToLS(key, valueToStore);
        }
        catch (error) {
            logger.logger.error(error);
        }
    }, [key, storedValue]);
    const removeValue = React.useCallback(() => {
        localStorage.LocalStorage.removeFromLS(key);
        setStoredValue(initialValue);
    }, [initialValue, key]);
    return [storedValue, setValue, removeValue];
};

exports.useLocalStorage = useLocalStorage;
