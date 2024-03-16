'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var themesData = require('./themesData.cjs');
var stylesheetBuilder = require('./utils/stylesheetBuilder/stylesheetBuilder.cjs');

const ThemeContext = React.createContext(undefined);
const ThemeContextProvider = ({ customerTheme, designSettings, children }) => {
    const [theme, setTheme] = React.useState(customerTheme || themesData.getThemeConfig(designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal));
    const [linkTag, setLinkTag] = React.useState();
    const [styleTag, setStyleTag] = React.useState();
    const changeTheme = React.useCallback((passedTheme, footerColor) => {
        var _a;
        const selectedTheme = (_a = themesData.themesData.themes) === null || _a === void 0 ? void 0 : _a[passedTheme];
        const updatedThemeData = Object.assign(Object.assign({}, theme), { theme: Object.assign(Object.assign({}, selectedTheme), { colors: Object.assign(Object.assign({}, selectedTheme.colors), { ternary: footerColor !== null && footerColor !== void 0 ? footerColor : selectedTheme.colors.ternary }) }) });
        setTheme(updatedThemeData);
    }, [theme, setTheme]);
    const changeTemplate = React.useCallback((template) => {
        setTheme(Object.assign(Object.assign({}, theme), { template }));
    }, [theme, setTheme]);
    const changeBorder = React.useCallback((border) => {
        setTheme(Object.assign(Object.assign({}, theme), { border }));
    }, [theme, setTheme]);
    const changeView = React.useCallback((view) => {
        setTheme(Object.assign(Object.assign({}, theme), { view }));
    }, [theme, setTheme]);
    const changePrimaryColor = React.useCallback((customColor) => {
        setTheme(Object.assign(Object.assign({}, theme), { customColor }));
    }, [theme, setTheme]);
    const changeBrandStyle = React.useCallback((brandStyle) => {
        setTheme(Object.assign(Object.assign({}, theme), { brandStyle }));
    }, [theme, setTheme]);
    React.useEffect(() => {
        setLinkTag(stylesheetBuilder.findOrCreateLinkTag());
        setStyleTag(stylesheetBuilder.findOrCreateStyleTag());
    }, []);
    React.useEffect(() => {
        const newTheme = customerTheme || themesData.getThemeConfig(designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal);
        return setTheme(newTheme);
    }, [customerTheme, designSettings === null || designSettings === void 0 ? void 0 : designSettings.modal]);
    React.useEffect(() => {
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
        const builtStylesheet = stylesheetBuilder.buildStylesheet(theme);
        if (styleTag.innerHTML === builtStylesheet)
            return;
        styleTag.innerHTML = builtStylesheet;
    }, [linkTag, styleTag, theme]);
    React.useEffect(() => {
        document.body.dataset.dynamicTheme = theme.theme.name;
        document.body.dataset.dynamicThemeBrand = theme.brandStyle;
    }, [theme.theme.name, theme.brandStyle]);
    const value = React.useMemo(() => ({
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
    return (jsxRuntime.jsx(ThemeContext.Provider, { value: value, children: children }));
};
const useThemeContext = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }
    return context;
};

exports.ThemeContext = ThemeContext;
exports.ThemeContextProvider = ThemeContextProvider;
exports.useThemeContext = useThemeContext;
