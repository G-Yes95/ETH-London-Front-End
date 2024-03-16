import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { overlayCardContext } from './OverlayCard.context.js';

const OverlayCardTarget = ({ children }) => {
    const { Provider } = overlayCardContext;
    const [portal, setPortal] = useState(null);
    return (jsxs(Provider, { value: {
            portal,
        }, children: [children, jsx("div", { ref: setPortal })] }));
};

export { OverlayCardTarget };
