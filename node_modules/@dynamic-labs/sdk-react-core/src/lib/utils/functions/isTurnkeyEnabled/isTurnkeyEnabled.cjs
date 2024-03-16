'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');
var isProviderEnabled = require('../isProviderEnabled/isProviderEnabled.cjs');

const isTurnkeyEnabled = (projectSettings) => { var _a; return isProviderEnabled.isProviderEnabled((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], sdkApi.ProviderEnum.Turnkey); };

exports.isTurnkeyEnabled = isTurnkeyEnabled;
