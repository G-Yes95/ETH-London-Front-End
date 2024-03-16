'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');

const getItemAsync = (key) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return window.localStorage.getItem(key) || undefined;
});
const setItemAsync = (key, value) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return window.localStorage.setItem(key, value);
});
const removeItemAsync = (key) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return localStorage.removeItem(key);
});

exports.getItemAsync = getItemAsync;
exports.removeItemAsync = removeItemAsync;
exports.setItemAsync = setItemAsync;
