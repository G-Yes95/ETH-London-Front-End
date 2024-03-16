'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Skeleton = ({ count = 1, className }) => {
    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(jsxRuntime.jsx("span", { className: `skeleton ${className} `, children: "\u200C" }));
    }
    return (jsxRuntime.jsx("span", { "data-testid": 'loading-skeleton-container', children: elements.map((element, id) => (jsxRuntime.jsx("span", { "data-testid": 'loading-skeleton', children: element }, `skeleton-${id}`))) }));
};

exports.Skeleton = Skeleton;
