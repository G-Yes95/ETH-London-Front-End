import * as React from 'react';

var _path, _path2, _g, _defs;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgTurnkey = function SvgTurnkey(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 56,
    height: 12,
    viewBox: "0 0 56 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#turnkey_svg__a)"
  }, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M34.892 0h1.388v9.261h-1.388V0ZM12.24 8.002V3.141h1.478V1.878H12.12c.094-.117.169-.248.223-.388.1-.255.153-.58.148-1.017V0h-1.338v.489a1.78 1.78 0 0 1-.164.805c-.174.357-.547.752-1.356.942l-.086.02v.885h1.291v5.193a.93.93 0 0 0 .93.928h1.971v-1.26H12.24Zm11.4-4.898c.54-.767 1.256-1.217 2.123-1.217h.692V3.23h-.845c-.592 0-1.067.192-1.404.596-.336.405-.538 1.037-.538 1.935v3.501h-1.416V1.887h1.388v1.217Zm30.22-1.217h1.355l.16.006-.059.148-3.537 9.144-.086-.033.01.004.075.029a1.336 1.336 0 0 1-1.2.815h-1.569v-1.246h1.52l.636-1.605-2.773-7.113-.058-.149h1.56l.027.075 1.951 5.433 1.962-5.434.026-.074Zm-34.422 0h1.4v7.377h-1.332v-.91c-.526.73-1.3 1.077-2.247 1.077-.964 0-1.624-.282-2.028-.773-.404-.49-.553-1.175-.553-1.954V1.887h1.403v4.952c0 .412.13.742.357.968.228.226.561.36.988.36.688 0 1.184-.228 1.514-.601.329-.373.497-.904.497-1.53V1.888Zm25.35-.166c-1.048 0-1.913.386-2.513 1.067-.6.682-.928 1.646-.928 2.793 0 1.148.34 2.118.95 2.793.61.675 1.486 1.054 2.533 1.054.833 0 1.549-.239 2.108-.678.56-.44.956-1.073 1.163-1.853l.037-.14h-1.444l-.027.074c-.318.874-.973 1.352-1.837 1.352-.621 0-1.1-.233-1.44-.623-.322-.37-.524-.884-.599-1.492h5.357l.011-.1a3.41 3.41 0 0 0 .014-.385c0-1.146-.313-2.112-.898-2.792-.585-.68-1.438-1.07-2.487-1.07Zm-1.947 3.071c.099-.518.304-.968.607-1.288a1.782 1.782 0 0 1 1.338-.55 1.738 1.738 0 0 1 1.278.515c.305.31.52.758.627 1.323h-3.85Zm-11.794-3.07c-.947 0-1.72.345-2.247 1.075v-.91h-1.332v7.375h1.401v-4.15c0-.624.17-1.156.498-1.53.33-.374.826-.6 1.514-.6.427 0 .76.134.988.36.227.226.357.556.357.967v4.954h1.403V4.446c0-.778-.15-1.462-.553-1.953-.405-.49-1.064-.772-2.029-.772Zm10.718.185-3.681 3.672 3.679 3.67-1.858-.003-2.687-2.682a1.39 1.39 0 0 1 0-1.97l2.694-2.688h1.853Z",
    fill: "#383C48"
  })), /*#__PURE__*/React.createElement("mask", {
    id: "turnkey_svg__b",
    style: {
      maskType: "luminance"
    },
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 7,
    height: 10
  }, _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M.625 0h5.452v9.603H.625V0Z",
    fill: "#fff"
  }))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    mask: "url(#turnkey_svg__b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m3.634 4.258 2.444 5.345H.625l2.444-5.345a.31.31 0 0 1 .565 0Zm-.283-.829A1.716 1.716 0 0 0 4.008.13a1.716 1.716 0 0 0-1.87 2.798c.322.321.758.502 1.213.501Z",
    fill: "#383C48"
  })))), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "turnkey_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(.625)",
    d: "M0 0h54.75v12H0z"
  })))));
};

export { SvgTurnkey as ReactComponent };
