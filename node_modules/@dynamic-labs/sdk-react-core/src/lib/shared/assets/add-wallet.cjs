'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var _path, _path2, _path3;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgAddWallet = function SvgAddWallet(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26ZM5 15c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 5 23c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.49 4.73h-.74v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74a.749.749 0 1 1 0 1.5Z",
    fill: "currentColor"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    opacity: 0.4,
    d: "M22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z",
    fill: "currentColor"
  })), _path3 || (_path3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3",
    fill: "currentColor"
  })));
};

exports.ReactComponent = SvgAddWallet;
