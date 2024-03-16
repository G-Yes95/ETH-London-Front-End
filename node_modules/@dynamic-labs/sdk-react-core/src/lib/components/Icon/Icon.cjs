'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Icon = ({ children, className = '', color, size, }) => {
    const colorClassNameMap = {
        'brand-primary': 'icon--color-brand-primary',
        'text-error': 'icon--color-text-error',
        'text-primary': 'icon--color-text-primary',
        'text-secondary': 'icon--color-text-secondary',
        'text-tertiary': 'icon--color-text-tertiary',
    };
    const sizeClassNameMap = {
        large: 'icon--size-large',
        medium: 'icon--size-medium',
        small: 'icon--size-small',
        xsmall: 'icon--size-xsmall',
    };
    const effectiveClassName = classNames.classNames(className, color ? colorClassNameMap[color] : '', size ? sizeClassNameMap[size] : '');
    return React.cloneElement(children, { className: effectiveClassName });
};

exports.Icon = Icon;
