import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgDynamicLogo = function SvgDynamicLogo(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 28,
    height: 24,
    viewBox: "0 0 28 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m12.064 1.803-1.527 1.42C8.186 5.405 5.835 7.589 3.482 9.767c-.54.5-1.099.98-1.776 1.273-.806.349-1.268.131-1.527-.738C-.183 9.087.01 7.954.709 6.91 1.304 6.02 2.054 5.28 2.825 4.56A214.253 214.253 0 0 1 6.54 1.163C7.089.674 7.688.227 8.42.079c2.193-.443 3.592 1.66 3.645 1.722l-.002.002ZM1.51 12.904c1.335-.384 2.336-1.23 3.31-2.122 3.108-2.835 6.211-5.673 9.333-8.492A20.17 20.17 0 0 1 16.33.552c.975-.662 2.034-.758 3.077-.127.378.227.748.491 1.055.807a127.671 127.671 0 0 1 6.335 7.04c.357.428.65.928.892 1.435.451.942.336 1.873-.213 2.75-.49.787-1.147 1.432-1.824 2.043a839.285 839.285 0 0 1-7.983 7.153 16.842 16.842 0 0 1-2.329 1.706c-1.538.95-3.08.831-4.484-.293a19.477 19.477 0 0 1-2.286-2.162C6.31 18.4 4.092 15.86 1.859 13.33c-.113-.127-.215-.264-.349-.429v.002Z",
    fill: "#3F65F9"
  })));
};

export { SvgDynamicLogo as ReactComponent };
