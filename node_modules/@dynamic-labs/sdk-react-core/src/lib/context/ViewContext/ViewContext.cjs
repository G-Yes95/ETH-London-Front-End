'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const ViewContext = React.createContext(undefined);
const ViewContextProvider = ({ children, initialView = 'wallet-list', internalEvents }) => {
    const [_view, setView] = React.useState(null);
    const view = _view || initialView;
    const goToInitialView = React.useCallback(() => {
        setView(null);
    }, [initialView]);
    React.useEffect(() => {
        if (!internalEvents) {
            return;
        }
        const handleInternalLogoutEvent = () => {
            goToInitialView();
        };
        const events = internalEvents.current;
        events.on('logout', handleInternalLogoutEvent);
        return () => {
            events.off('logout', handleInternalLogoutEvent);
        };
    }, [goToInitialView, internalEvents]);
    const value = React.useMemo(() => ({
        goToInitialView,
        setView: setView,
        view,
    }), [view, goToInitialView]);
    return jsxRuntime.jsx(ViewContext.Provider, { value: value, children: children });
};
const useViewContext = () => {
    const context = React.useContext(ViewContext);
    if (context === undefined) {
        throw new Error('usage of useViewContext not wrapped in `ViewContextProvider`.');
    }
    return context;
};

exports.ViewContext = ViewContext;
exports.ViewContextProvider = ViewContextProvider;
exports.useViewContext = useViewContext;
