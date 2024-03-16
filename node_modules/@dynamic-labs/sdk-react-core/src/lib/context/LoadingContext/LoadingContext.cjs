'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../DynamicContext/useInternalDynamicContext.cjs');

const LoadingContext = React.createContext(undefined);
const LoadingContextProvider = ({ children, }) => {
    const { internalEvents } = useInternalDynamicContext.useInternalDynamicContext();
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const events = internalEvents === null || internalEvents === void 0 ? void 0 : internalEvents.current;
        if (!events) {
            return;
        }
        const handleInternalLogoutEvent = () => {
            setLoading(false);
        };
        events.on('logout', handleInternalLogoutEvent);
        return () => {
            events.off('logout', handleInternalLogoutEvent);
        };
    }, [internalEvents]);
    const value = React.useMemo(() => ({
        loading,
        setLoading,
    }), [loading]);
    return (jsxRuntime.jsx(LoadingContext.Provider, { value: value, children: children }));
};
const useLoadingContext = () => {
    const context = React.useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('usage of useLoadingContext not wrapped in `LoadingContextProvider`.');
    }
    return context;
};

exports.LoadingContext = LoadingContext;
exports.LoadingContextProvider = LoadingContextProvider;
exports.useLoadingContext = useLoadingContext;
