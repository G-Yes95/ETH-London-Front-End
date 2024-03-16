'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Typography = require('../Typography/Typography.cjs');

const Input = (_a) => {
    var { className = '', id, label, type, onChange, onBlur, name, value, optional, error = false, disabled, message, placeholder, variant = 'dense', suffix } = _a, rest = _tslib.__rest(_a, ["className", "id", "label", "type", "onChange", "onBlur", "name", "value", "optional", "error", "disabled", "message", "placeholder", "variant", "suffix"]);
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('input__container', {
            'input__container--dense': variant === 'dense',
            'input__container--regular': variant === 'regular',
        }), children: [jsxRuntime.jsx("input", Object.assign({}, rest, { name: name, value: value, onChange: onChange, onBlur: onBlur, type: type, id: id, placeholder: variant === 'regular' ? placeholder : label, disabled: disabled, className: classNames.classNames('input', className, {
                    input__error: error,
                    input__has_trailing: optional,
                }) })), jsxRuntime.jsx("label", { htmlFor: id, className: classNames.classNames('input__label'), children: label }), suffix && jsxRuntime.jsx("div", { className: classNames.classNames('input__suffix'), children: suffix }), optional && jsxRuntime.jsx("span", { className: 'input__trailing', children: "Optional" }), Boolean(message) && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_mini', className: classNames.classNames('input__message', {
                    input__message__error: error,
                }), children: message }))] }));
};

exports.Input = Input;
