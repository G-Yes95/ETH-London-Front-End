import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

const NetworkControlSkeleton = ({ className, }) => (jsx("div", { className: classNames('network-control-skeleton', className), "data-testid": 'network-control-loading', children: jsx("div", { className: 'network-control-skeleton__icon' }) }));

export { NetworkControlSkeleton };
