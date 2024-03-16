'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var OverlayCard_context = require('./OverlayCard.context.cjs');

const OverlayCardTarget = ({ children }) => {
    const { Provider } = OverlayCard_context.overlayCardContext;
    const [portal, setPortal] = React.useState(null);
    return (jsxRuntime.jsxs(Provider, { value: {
            portal,
        }, children: [children, jsxRuntime.jsx("div", { ref: setPortal })] }));
};

exports.OverlayCardTarget = OverlayCardTarget;
