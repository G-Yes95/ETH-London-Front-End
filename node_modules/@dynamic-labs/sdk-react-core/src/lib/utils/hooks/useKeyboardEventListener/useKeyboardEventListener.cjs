'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useKeyboardEventListener = ({ disabled, inputKey, onKeyPressed, }) => {
    React.useEffect(() => {
        const handleKeydown = (evt) => {
            if (disabled || evt.key !== inputKey)
                return;
            onKeyPressed();
        };
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [disabled, inputKey, onKeyPressed]);
};

exports.useKeyboardEventListener = useKeyboardEventListener;
