import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { TextButton } from '../TextButton/TextButton.js';
import { Tooltip } from '../Tooltip/Tooltip.js';

const CopyButton = ({ children, className = '', textToCopy, onClick, }) => {
    const [hover, setHover] = useState(false);
    const [copied, setCopied] = useState(false);
    useEffect(() => {
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
    return (jsx(TextButton, { className: classNames('copy-button__container', className), onClick: () => copyToClipboard(), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), children: jsx(Tooltip, { className: 'copy-button__tooltip', content: copied ? 'Copied' : 'Copy', children: children }) }));
};

export { CopyButton };
