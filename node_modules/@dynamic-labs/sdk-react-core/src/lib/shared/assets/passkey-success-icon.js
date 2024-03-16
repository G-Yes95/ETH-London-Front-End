import * as React from 'react';

var _circle, _g, _path, _path2, _defs;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgPasskeySuccessIcon = function SvgPasskeySuccessIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 207,
    height: 140,
    viewBox: "0 0 207 140",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 103.5,
    cy: 103,
    r: 103,
    fill: "url(#passkey-success-icon_svg__a)",
    fillOpacity: 0.12
  })), _g || (_g = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#passkey-success-icon_svg__b)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M125.931 102.48A29.222 29.222 0 0 0 133.333 83c0-16.2-13.133-29.333-29.333-29.333S74.666 66.8 74.666 83a29.223 29.223 0 0 0 7.405 19.483c5.52-6.63 16.005-9.007 22.387-9.007 6.383 0 15.962 1.903 21.473 9.004ZM93 75.667c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Z",
    fill: "#4779FF"
  }))), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M139.624 25.982c.59.095 1.055.546 1.154 1.12l1.557 9.008 6.8 3.793c.504.28.779.835.689 1.39a1.35 1.35 0 0 1-1.09 1.106l-7.646 1.473-4.299 8.066a1.386 1.386 0 0 1-1.447.703 1.387 1.387 0 0 1-1.155-1.12l-1.556-9.008-6.801-3.793a1.352 1.352 0 0 1-.689-1.39 1.352 1.352 0 0 1 1.09-1.106l7.647-1.473 4.298-8.066a1.387 1.387 0 0 1 1.448-.703Z",
    fill: "#4779FF"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    opacity: 0.8,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M54.484 53.65a1.06 1.06 0 0 1 1.224.103l5.247 4.55 5.861-1.046c.434-.078.864.116 1.077.486.214.37.167.839-.117 1.176l-3.837 4.553 1.317 6.82a1.06 1.06 0 0 1-.522 1.11 1.06 1.06 0 0 1-1.224-.102l-5.247-4.55-5.861 1.046a1.027 1.027 0 0 1-1.078-.487 1.027 1.027 0 0 1 .118-1.176l3.836-4.552-1.317-6.82a1.06 1.06 0 0 1 .523-1.11Z",
    fill: "#4779FF"
  })), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "passkey-success-icon_svg__a",
    x1: 103.5,
    y1: 0,
    x2: 103.5,
    y2: 105.711,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4779FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#4779FF",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "passkey-success-icon_svg__b"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 74.666,
    y: 53.667,
    width: 58.667,
    height: 58.667,
    rx: 29.333,
    fill: "#fff"
  })))));
};

export { SvgPasskeySuccessIcon as ReactComponent };
