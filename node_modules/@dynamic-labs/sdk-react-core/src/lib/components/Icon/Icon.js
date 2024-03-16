import { cloneElement } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';

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
    const effectiveClassName = classNames(className, color ? colorClassNameMap[color] : '', size ? sizeClassNameMap[size] : '');
    return cloneElement(children, { className: effectiveClassName });
};

export { Icon };
