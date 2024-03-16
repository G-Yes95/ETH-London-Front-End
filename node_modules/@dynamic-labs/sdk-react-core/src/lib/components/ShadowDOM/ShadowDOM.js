import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useRef, useState, useMemo, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { isLegacySafari } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import css_248z from '../../styles/index.shadow.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { LegacySafariCssOverrides } from '../LegacySafariCssOverrides/LegacySafariCssOverrides.js';
import { isShadowDOMFlagEnabled } from './utils.js';

const ShadowDOMContext = React__default.createContext({});
const ShadowDOMStyle = () => jsx("style", { children: css_248z });
const ShadowDOM = ({ mode = 'open', id, className, children, dataTestId, zIndex, }) => {
    const { shadowDOMEnabled: shadowDOMSetting, cssOverrides } = useInternalDynamicContext();
    const shadowDOMFlag = isShadowDOMFlagEnabled();
    const shadowDOMEnabled = shadowDOMFlag && shadowDOMSetting;
    const nodeRef = useRef(null);
    const [shadowRoot, setShadowRoot] = useState();
    const CssOverridesElement = useMemo(() => {
        if (cssOverrides && typeof cssOverrides !== 'string') {
            return () => cssOverrides;
        }
        else if (cssOverrides && typeof cssOverrides === 'string') {
            const StyleElement = () => jsx("style", { children: cssOverrides });
            return StyleElement;
        }
        return null;
    }, [cssOverrides]);
    useLayoutEffect(() => {
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
    const shouldRenderStyles = Boolean(Object.keys(css_248z).length);
    if (!shadowDOMEnabled) {
        return (jsxs("div", { "data-testid": dataTestId, ref: nodeRef, id: id, className: classNames('dynamic-shadow-dom', className), style: { zIndex }, children: [children, shouldRenderStyles && jsx(ShadowDOMStyle, {}), isLegacySafari() && jsx(LegacySafariCssOverrides, {}), CssOverridesElement && jsx(CssOverridesElement, {})] }));
    }
    return (jsx(ShadowDOMContext.Provider, { value: { shadowRoot }, children: jsx("div", { "data-testid": dataTestId, ref: nodeRef, id: id, className: classNames('dynamic-shadow-dom', className), style: { zIndex }, children: shadowRoot &&
                createPortal(jsxs("div", { className: 'dynamic-shadow-dom-content', children: [children, shouldRenderStyles && jsx(ShadowDOMStyle, {}), isLegacySafari() && jsx(LegacySafariCssOverrides, {}), CssOverridesElement && jsx(CssOverridesElement, {})] }), shadowRoot) }) }));
};

export { ShadowDOM, ShadowDOMContext, ShadowDOMStyle };
