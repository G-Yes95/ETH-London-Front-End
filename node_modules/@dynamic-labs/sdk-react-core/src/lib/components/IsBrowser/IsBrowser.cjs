'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const IsBrowser = ({ children }) => {
    const [isBrowser, setIsBrowser] = React.useState(false);
    // this useEffect does not run during SSR
    React.useEffect(() => {
        setIsBrowser(true);
    }, []);
    if (!isBrowser) {
        // Justification: We specifically need to return an element instead of null
        // in order to have stable content during SSR
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
};

exports.IsBrowser = IsBrowser;
