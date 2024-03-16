import { jsx } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { Switch } from '../../Switch/Switch.js';

const LoginWithEmailSwitch = () => {
    const { loginWithEmail, setLogInWithEmail } = useInternalDynamicContext();
    return (jsx(Switch, { firstButton: {
            active: loginWithEmail,
            handleButtonClick: () => setLogInWithEmail(true),
            name: 'True',
        }, secondButton: {
            active: !loginWithEmail,
            handleButtonClick: () => setLogInWithEmail(false),
            name: 'False',
        } }));
};

export { LoginWithEmailSwitch };
