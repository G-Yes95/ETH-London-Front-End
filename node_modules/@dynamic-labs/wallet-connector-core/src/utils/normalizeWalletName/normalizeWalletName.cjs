'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const normalizeWalletName = (name) => name.replace(/\W/g, '').toLowerCase();

exports.normalizeWalletName = normalizeWalletName;
