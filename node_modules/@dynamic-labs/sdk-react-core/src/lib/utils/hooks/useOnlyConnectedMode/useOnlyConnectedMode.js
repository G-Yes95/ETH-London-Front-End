import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';

const useOnlyConnectedMode = () => {
    const { authMode, user } = useInternalDynamicContext();
    return authMode === 'connect-only' && !user;
};

export { useOnlyConnectedMode };
