'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../../context/ViewContext/ViewContext.cjs');
require('react');
var checkCircle = require('../../../../../../shared/assets/check-circle.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../../../utils/constants/colors.cjs');
require('../../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../../../shared/consts/index.cjs');
var classNames = require('../../../../../../utils/functions/classNames/classNames.cjs');
var Tooltip = require('../../../../../Tooltip/Tooltip.cjs');
var Typography = require('../../../../../Typography/Typography.cjs');

const VerifiedEmailTooltip = (jsxRuntime.jsx(Typography.Typography, { variant: 'numbers_medium', color: 'tooltip', children: "This email is verified" }));
const VerifiedEmailIcon = ({ className, overwriteTooltipProps, }) => {
    const { user } = useInternalDynamicContext.useInternalDynamicContext();
    if (!(user === null || user === void 0 ? void 0 : user.email))
        return null;
    const isVerified = user === null || user === void 0 ? void 0 : user.verifiedCredentials.some(({ email }) => email === user.email);
    if (!isVerified)
        return null;
    return (jsxRuntime.jsx(Tooltip.Tooltip, Object.assign({ content: VerifiedEmailTooltip }, overwriteTooltipProps, { children: jsxRuntime.jsx(checkCircle.ReactComponent, { className: classNames.classNames('dynamic-verified-email-icon', className) }) })));
};

exports.VerifiedEmailIcon = VerifiedEmailIcon;
