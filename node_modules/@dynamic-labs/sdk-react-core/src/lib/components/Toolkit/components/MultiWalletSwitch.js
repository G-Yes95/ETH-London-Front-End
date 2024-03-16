import { jsx } from 'react/jsx-runtime';
import { Switch } from '../../Switch/Switch.js';

const MultiWalletSwitch = ({ multiWallet, setMultiWallet, }) => (jsx(Switch, { firstButton: {
        active: multiWallet,
        handleButtonClick: () => setMultiWallet(true),
        name: 'True',
    }, secondButton: {
        active: !multiWallet,
        handleButtonClick: () => setMultiWallet(false),
        name: 'False',
    } }));

export { MultiWalletSwitch };
