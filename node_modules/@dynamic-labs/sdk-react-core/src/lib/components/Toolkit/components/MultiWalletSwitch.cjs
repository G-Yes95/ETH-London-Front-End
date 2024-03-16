'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Switch = require('../../Switch/Switch.cjs');

const MultiWalletSwitch = ({ multiWallet, setMultiWallet, }) => (jsxRuntime.jsx(Switch.Switch, { firstButton: {
        active: multiWallet,
        handleButtonClick: () => setMultiWallet(true),
        name: 'True',
    }, secondButton: {
        active: !multiWallet,
        handleButtonClick: () => setMultiWallet(false),
        name: 'False',
    } }));

exports.MultiWalletSwitch = MultiWalletSwitch;
