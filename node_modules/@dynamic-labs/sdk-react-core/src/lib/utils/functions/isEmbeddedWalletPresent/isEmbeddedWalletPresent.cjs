'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findEmbeddedWalletFromVerifiedCredentials = require('../findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.cjs');

const isEmbeddedWalletPresent = (jwt) => Boolean(findEmbeddedWalletFromVerifiedCredentials.findEmbeddedWalletFromVerifiedCredentials(jwt));

exports.isEmbeddedWalletPresent = isEmbeddedWalletPresent;
