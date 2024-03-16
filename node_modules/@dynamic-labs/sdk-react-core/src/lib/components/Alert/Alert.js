import { jsx, jsxs } from 'react/jsx-runtime';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgError } from '../../shared/assets/error.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { Icon } from '../Icon/Icon.js';
import { Typography } from '../Typography/Typography.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const errorIconMap = {
    error: jsx(SvgError, {}),
};
const Alert = ({ children, icon, variant = 'error', contentDataTestId, }) => (jsxs("div", { className: classNames('alert', {
        'alert--error': variant === 'error',
        'alert--warning': variant === 'warning',
    }), children: [icon && (jsx(Icon, { size: 'small', className: 'alert__icon', children: typeof icon === 'string' ? errorIconMap[icon] : icon })), jsx(Typography, { variant: 'body_small', "data-testid": contentDataTestId, children: children })] }));

export { Alert };
