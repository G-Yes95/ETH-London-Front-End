'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const ModalHeader = ({ alignContent, children, leading, displayLeading = true, trailing, displayTrailing = true, style, displayBorder, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('modal-header', {
        'modal-header--align-content-bottom': alignContent === 'bottom',
        'modal-header--border': displayBorder,
    }), style: style, children: [displayLeading && jsxRuntime.jsx("div", { className: 'modal-header__leading', children: leading }), children, displayTrailing && (jsxRuntime.jsx("div", { className: 'modal-header__trailing', children: trailing }))] }));

exports.ModalHeader = ModalHeader;
