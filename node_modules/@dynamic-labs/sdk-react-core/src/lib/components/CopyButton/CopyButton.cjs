'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var TextButton = require('../TextButton/TextButton.cjs');
var Tooltip = require('../Tooltip/Tooltip.cjs');

const CopyButton = ({ children, className = '', textToCopy, onClick, }) => {
    const [hover, setHover] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            /* istanbul ignore else */
            if (!hover) {
                setCopied(false);
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [hover]);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    return (jsxRuntime.jsx(TextButton.TextButton, { className: classNames.classNames('copy-button__container', className), onClick: () => copyToClipboard(), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), children: jsxRuntime.jsx(Tooltip.Tooltip, { className: 'copy-button__tooltip', content: copied ? 'Copied' : 'Copy', children: children }) }));
};

exports.CopyButton = CopyButton;
