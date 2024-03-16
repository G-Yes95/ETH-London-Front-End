import { __rest } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Typography } from '../Typography/Typography.js';

const Input = (_a) => {
    var { className = '', id, label, type, onChange, onBlur, name, value, optional, error = false, disabled, message, placeholder, variant = 'dense', suffix } = _a, rest = __rest(_a, ["className", "id", "label", "type", "onChange", "onBlur", "name", "value", "optional", "error", "disabled", "message", "placeholder", "variant", "suffix"]);
    return (jsxs("div", { className: classNames('input__container', {
            'input__container--dense': variant === 'dense',
            'input__container--regular': variant === 'regular',
        }), children: [jsx("input", Object.assign({}, rest, { name: name, value: value, onChange: onChange, onBlur: onBlur, type: type, id: id, placeholder: variant === 'regular' ? placeholder : label, disabled: disabled, className: classNames('input', className, {
                    input__error: error,
                    input__has_trailing: optional,
                }) })), jsx("label", { htmlFor: id, className: classNames('input__label'), children: label }), suffix && jsx("div", { className: classNames('input__suffix'), children: suffix }), optional && jsx("span", { className: 'input__trailing', children: "Optional" }), Boolean(message) && (jsx(Typography, { variant: 'body_mini', className: classNames('input__message', {
                    input__message__error: error,
                }), children: message }))] }));
};

export { Input };
