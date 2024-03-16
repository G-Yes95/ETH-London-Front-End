import { jsx } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgCheckCircle } from '../../../../../../shared/assets/check-circle.js';
import '@dynamic-labs/wallet-book';
import '../../../../../../utils/constants/colors.js';
import '../../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../../../shared/consts/index.js';
import { classNames } from '../../../../../../utils/functions/classNames/classNames.js';
import { Tooltip } from '../../../../../Tooltip/Tooltip.js';
import { Typography } from '../../../../../Typography/Typography.js';

const VerifiedEmailTooltip = (jsx(Typography, { variant: 'numbers_medium', color: 'tooltip', children: "This email is verified" }));
const VerifiedEmailIcon = ({ className, overwriteTooltipProps, }) => {
    const { user } = useInternalDynamicContext();
    if (!(user === null || user === void 0 ? void 0 : user.email))
        return null;
    const isVerified = user === null || user === void 0 ? void 0 : user.verifiedCredentials.some(({ email }) => email === user.email);
    if (!isVerified)
        return null;
    return (jsx(Tooltip, Object.assign({ content: VerifiedEmailTooltip }, overwriteTooltipProps, { children: jsx(SvgCheckCircle, { className: classNames('dynamic-verified-email-icon', className) }) })));
};

export { VerifiedEmailIcon };
