'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');

const isEmailVerificationRequired = (updateSelfResponse) => updateSelfResponse.nextView === sdkApi.NextViewEnum.VerifyEmail;

exports.isEmailVerificationRequired = isEmailVerificationRequired;
