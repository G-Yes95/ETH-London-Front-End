'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
var utils$1 = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var index_shadow = require('../../styles/index.shadow.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var LegacySafariCssOverrides = require('../LegacySafariCssOverrides/LegacySafariCssOverrides.cjs');
var utils = require('./utils.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ShadowDOMContext = React__default["default"].createContext({});
const ShadowDOMStyle = () => jsxRuntime.jsx("style", { children: index_shadow });
const ShadowDOM = ({ mode = 'open', id, className, children, dataTestId, zIndex, }) => {
    const { shadowDOMEnabled: shadowDOMSetting, cssOverrides } = useInternalDynamicContext.useInternalDynamicContext();
    const shadowDOMFlag = utils.isShadowDOMFlagEnabled();
    const shadowDOMEnabled = shadowDOMFlag && shadowDOMSetting;
    const nodeRef = React.useRef(null);
    const [shadowRoot, setShadowRoot] = React.useState();
    const CssOverridesElement = React.useMemo(() => {
        if (cssOverrides && typeof cssOverrides !== 'string') {
            return () => cssOverrides;
        }
        else if (cssOverrides && typeof cssOverrides === 'string') {
            const StyleElement = () => jsxRuntime.jsx("style", { children: cssOverrides });
            return StyleElement;
        }
        return null;
    }, [cssOverrides]);
    React.useLayoutEffect(() => {
        if (nodeRef.current && shadowDOMEnabled) {
            try {
                const root = nodeRef.current.attachShadow({
                    mode,
                });
                setShadowRoot(root);
            }
            catch (e) {
                // do nothing
            }
        }
    }, [shadowDOMEnabled, nodeRef, mode]);
    const shouldRenderStyles = Boolean(Object.keys(index_shadow).length);
    if (!shadowDOMEnabled) {
        return (jsxRuntime.jsxs("div", { "data-testid": dataTestId, ref: nodeRef, id: id, className: classNames.classNames('dynamic-shadow-dom', className), style: { zIndex }, children: [children, shouldRenderStyles && jsxRuntime.jsx(ShadowDOMStyle, {}), utils$1.isLegacySafari() && jsxRuntime.jsx(LegacySafariCssOverrides.LegacySafariCssOverrides, {}), CssOverridesElement && jsxRuntime.jsx(CssOverridesElement, {})] }));
    }
    return (jsxRuntime.jsx(ShadowDOMContext.Provider, { value: { shadowRoot }, children: jsxRuntime.jsx("div", { "data-testid": dataTestId, ref: nodeRef, id: id, className: classNames.classNames('dynamic-shadow-dom', className), style: { zIndex }, children: shadowRoot &&
                reactDom.createPortal(jsxRuntime.jsxs("div", { className: 'dynamic-shadow-dom-content', children: [children, shouldRenderStyles && jsxRuntime.jsx(ShadowDOMStyle, {}), utils$1.isLegacySafari() && jsxRuntime.jsx(LegacySafariCssOverrides.LegacySafariCssOverrides, {}), CssOverridesElement && jsxRuntime.jsx(CssOverridesElement, {})] }), shadowRoot) }) }));
};

exports.ShadowDOM = ShadowDOM;
exports.ShadowDOMContext = ShadowDOMContext;
exports.ShadowDOMStyle = ShadowDOMStyle;
