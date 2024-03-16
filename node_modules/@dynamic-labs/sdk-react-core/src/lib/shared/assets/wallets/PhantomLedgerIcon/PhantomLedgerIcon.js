import { jsxs, jsx } from 'react/jsx-runtime';
import { PhantomIcon, LedgerIcon } from '@dynamic-labs/iconic';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';

const PhantomLedgerIcon = () => {
    const { view } = useViewContext();
    const renderSmallerIconSize = view !== 'pending-connect' && view !== 'pending-signature';
    const wrapperStyle = renderSmallerIconSize ? { height: 24, width: 24 } : {};
    const iconsStyle = renderSmallerIconSize
        ? {
            leftIcon: { height: 22, left: '-.275rem', width: 22 },
            rightIcon: { height: 22, right: '-.275rem', width: 22 },
        }
        : {
            leftIcon: { height: 40, left: '-.5rem', width: 40 },
            rightIcon: { height: 40, right: '-.5rem', width: 40 },
        };
    return (jsxs("div", { style: wrapperStyle, className: 'phantom-ledger-icon__container', children: [jsx(PhantomIcon, { className: 'phantom-ledger-icon', style: iconsStyle.leftIcon }), jsx(LedgerIcon, { className: 'phantom-ledger-icon', style: iconsStyle.rightIcon })] }));
};

export { PhantomLedgerIcon };
