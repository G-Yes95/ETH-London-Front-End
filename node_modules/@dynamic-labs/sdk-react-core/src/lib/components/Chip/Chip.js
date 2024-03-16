import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../Typography/Typography.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Chip = ({ children, icon, className, }) => (jsxs("div", { className: classNames('chip', className, {
        'chip__with-icon': Boolean(icon),
    }), children: [Boolean(icon) && jsx("div", { className: 'chip--icon', children: icon }), jsx(Typography, { variant: 'body_small', children: children })] }));

export { Chip };
