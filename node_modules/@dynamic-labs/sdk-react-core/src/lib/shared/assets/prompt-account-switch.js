import * as React from 'react';

var _path, _path2, _path3, _path4;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgPromptAccountSwitch = function SvgPromptAccountSwitch(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 40,
    height: 40,
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M31.583 11.75a7.617 7.617 0 0 0-1.25-.083H13.667c-.467 0-.917.033-1.35.1.233-.467.566-.9.966-1.3L18.7 5.033a5.875 5.875 0 0 1 8.267 0l2.916 2.95a5.623 5.623 0 0 1 1.7 3.767Z",
    fill: "#2660FF"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    opacity: 0.4,
    d: "M38.667 20v8.333c0 5-3.334 8.334-8.334 8.334H14.717a5.988 5.988 0 0 0 1.316-1.567c.617-1 .967-2.184.967-3.434A6.665 6.665 0 0 0 10.333 25c-2 0-3.783.883-5 2.267V20c0-4.534 2.734-7.7 6.984-8.233.433-.067.883-.1 1.35-.1h16.666c.434 0 .85.016 1.25.083 4.3.5 7.084 3.683 7.084 8.25Z",
    fill: "#2660FF"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M38.667 20.833h-5a3.343 3.343 0 0 0-3.334 3.334c0 1.833 1.5 3.333 3.334 3.333h5",
    fill: "#2660FF"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.333 25a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM2 31.667a8.333 8.333 0 1 1 16.667 0 8.333 8.333 0 0 1-16.667 0Zm8.577-3.09a.833.833 0 0 1 1.179 0l2.5 2.5a.833.833 0 0 1 0 1.18l-2.5 2.5a.833.833 0 0 1-1.179-1.18l1.078-1.077H7a.833.833 0 0 1 0-1.666h4.655l-1.078-1.078a.833.833 0 0 1 0-1.178Z",
    fill: "#2660FF"
  })));
};

export { SvgPromptAccountSwitch as ReactComponent };
