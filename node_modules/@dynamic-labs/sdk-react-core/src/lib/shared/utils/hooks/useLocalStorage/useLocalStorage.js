import { useState, useCallback } from 'react';
import { logger } from '../../../logger.js';
import { LocalStorage } from '../../classes/storage/localStorage.js';

const useLocalStorage = (key, initialValue, valueValidator, otherKeysToRemove) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = LocalStorage.getFromLS(key);
            if (Boolean(item) && valueValidator && !valueValidator(item)) {
                LocalStorage.removeFromLS(key);
                otherKeysToRemove === null || otherKeysToRemove === void 0 ? void 0 : otherKeysToRemove.forEach((k) => LocalStorage.removeFromLS(k));
                return initialValue;
            }
            else {
                return item !== null && item !== void 0 ? item : initialValue;
            }
        }
        catch (error) {
            logger.error(error);
            return initialValue;
        }
    });
    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            LocalStorage.setToLS(key, valueToStore);
        }
        catch (error) {
            logger.error(error);
        }
    }, [key, storedValue]);
    const removeValue = useCallback(() => {
        LocalStorage.removeFromLS(key);
        setStoredValue(initialValue);
    }, [initialValue, key]);
    return [storedValue, setValue, removeValue];
};

export { useLocalStorage };
