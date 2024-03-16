'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');

const useOnlyConnectedMode = () => {
    const { authMode, user } = useInternalDynamicContext.useInternalDynamicContext();
    return authMode === 'connect-only' && !user;
};

exports.useOnlyConnectedMode = useOnlyConnectedMode;
