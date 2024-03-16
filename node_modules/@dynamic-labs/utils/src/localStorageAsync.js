import { __awaiter } from '../_virtual/_tslib.js';

const getItemAsync = (key) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return window.localStorage.getItem(key) || undefined;
});
const setItemAsync = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return window.localStorage.setItem(key, value);
});
const removeItemAsync = (key) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return localStorage.removeItem(key);
});

export { getItemAsync, removeItemAsync, setItemAsync };
