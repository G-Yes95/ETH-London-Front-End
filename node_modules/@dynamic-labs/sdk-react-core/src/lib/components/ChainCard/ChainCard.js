import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../Typography/Typography.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const ChainCard = ({ onClick, chainName, startSlot, endSlot, className, }) => (jsxs("div", { onClick: onClick, role: 'button', tabIndex: 1, className: classNames('chain-card', className), children: [startSlot, jsx(Typography, { color: 'primary', variant: 'body_normal', weight: 'medium', className: 'chain-card__text', children: chainName }), endSlot] }));

export { ChainCard };
