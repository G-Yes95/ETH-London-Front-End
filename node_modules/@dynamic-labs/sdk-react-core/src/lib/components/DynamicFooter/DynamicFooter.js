import { jsx } from 'react/jsx-runtime';
import { PoweredByDynamic } from '../PoweredByDynamic/PoweredByDynamic.js';

const DynamicFooter = () => (jsx("div", { className: 'dynamic-footer', children: jsx(PoweredByDynamic, {}) }));

export { DynamicFooter };
