import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Badge = ({ className = '', dot, text }) => (jsxs("div", { className: classNames('badge__container', className), children: [dot && jsx("span", { "data-testid": 'badge__dot', className: 'badge__dot' }), jsx("span", { children: text })] }));

export { Badge };
