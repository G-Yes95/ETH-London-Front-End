import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useCallback, useEffect, useMemo, useContext } from 'react';
import { getThemeConfig, themesData } from './themesData.js';
import { findOrCreateLinkTag, findOrCreateStyleTag, buildStylesheet } from './utils/stylesheetBuilder/stylesheetBuilder.js';

const ThemeContext = createContext(undefined);
const ThemeContextProvider = ({ customerTheme, designSettings, children }) => {
    const [theme, setTheme] = useState(customerTheme || getThemeConfig(designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal));
    const [linkTag, setLinkTag] = useState();
    const [styleTag, setStyleTag] = useState();
    const changeTheme = useCallback((passedTheme, footerColor) => {
        var _a;
        const selectedTheme = (_a = themesData.themes) === null || _a === void 0 ? void 0 : _a[passedTheme];
        const updatedThemeData = Object.assign(Object.assign({}, theme), { theme: Object.assign(Object.assign({}, selectedTheme), { colors: Object.assign(Object.assign({}, selectedTheme.colors), { ternary: footerColor !== null && footerColor !== void 0 ? footerColor : selectedTheme.colors.ternary }) }) });
        setTheme(updatedThemeData);
    }, [theme, setTheme]);
    const changeTemplate = useCallback((template) => {
        setTheme(Object.assign(Object.assign({}, theme), { template }));
    }, [theme, setTheme]);
    const changeBorder = useCallback((border) => {
        setTheme(Object.assign(Object.assign({}, theme), { border }));
    }, [theme, setTheme]);
    const changeView = useCallback((view) => {
        setTheme(Object.assign(Object.assign({}, theme), { view }));
    }, [theme, setTheme]);
    const changePrimaryColor = useCallback((customColor) => {
        setTheme(Object.assign(Object.assign({}, theme), { customColor }));
    }, [theme, setTheme]);
    const changeBrandStyle = useCallback((brandStyle) => {
        setTheme(Object.assign(Object.assign({}, theme), { brandStyle }));
    }, [theme, setTheme]);
    useEffect(() => {
        setLinkTag(findOrCreateLinkTag());
        setStyleTag(findOrCreateStyleTag());
    }, []);
    useEffect(() => {
        const newTheme = customerTheme || getThemeConfig(designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal);
        return setTheme(newTheme);
    }, [customerTheme, designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal]);
    useEffect(() => {
        if (!linkTag)
            return;
        if (!styleTag)
            return;
        const linkHref = theme.template === 'default'
            ? ''
            : `https://app.dynamic.xyz/assets/templates/${theme.template}.css`;
        if (linkTag.href !== linkHref) {
            linkTag.href = linkHref;
        }
        const builtStylesheet = buildStylesheet(theme);
        if (styleTag.innerHTML === builtStylesheet)
            return;
        styleTag.innerHTML = builtStylesheet;
    }, [linkTag, styleTag, theme]);
    useEffect(() => {
        document.body.dataset.dynamicTheme = theme.theme.name;
        document.body.dataset.dynamicThemeBrand = theme.brandStyle;
    }, [theme.theme.name, theme.brandStyle]);
    const value = useMemo(() => ({
        changeBorder,
        changeBrandStyle,
        changePrimaryColor,
        changeTemplate,
        changeTheme,
        changeView,
        theme,
    }), [
        theme,
        changeBorder,
        changeBrandStyle,
        changeTemplate,
        changeTheme,
        changePrimaryColor,
        changeView,
    ]);
    return (jsx(ThemeContext.Provider, { value: value, children: children }));
};
const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }
    return context;
};

export { ThemeContext, ThemeContextProvider, useThemeContext };
