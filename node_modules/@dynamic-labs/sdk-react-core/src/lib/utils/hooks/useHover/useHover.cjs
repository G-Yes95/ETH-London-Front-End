'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useHover = (initialValue = false, falseOnClick = false) => {
    const [hover, setHover] = React.useState(initialValue);
    const handlers = {
        onMouseDown: () => setHover(true),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        onMouseUp: () => setHover(falseOnClick),
    };
    return [hover, handlers];
};

exports.useHover = useHover;
