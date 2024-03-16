'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const walletsRequiringTwoStepAuthentication = ['Dapper'];
const requiresTwoStepAuthentication = (connector) => (utils.isMobile() && !(connector === null || connector === void 0 ? void 0 : connector.canConnectViaCustodialService)) ||
    walletsRequiringTwoStepAuthentication.includes((connector === null || connector === void 0 ? void 0 : connector.name) || '');

exports.requiresTwoStepAuthentication = requiresTwoStepAuthentication;
