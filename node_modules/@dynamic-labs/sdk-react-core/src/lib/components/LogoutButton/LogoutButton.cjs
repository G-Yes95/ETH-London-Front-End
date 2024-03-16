'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var logout = require('../../shared/assets/logout.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var Button = require('../Button/Button.cjs');

const LogoutButton = ({ buttonClassName = '', isTextButton = false, }) => {
    const [loading, setLoading] = React.useState(false);
    const { handleLogOut } = useInternalDynamicContext.useInternalDynamicContext();
    const onLogOutClick = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield handleLogOut();
        }
        catch (e) {
            logger.logger.error(e);
        }
        finally {
            setLoading(false);
        }
    });
    return (jsxRuntime.jsx(Button.Button, { buttonClassName: buttonClassName, buttonVariant: 'tertiary', buttonPadding: isTextButton ? 'none' : 'medium', loading: loading, disabled: loading, onClick: onLogOutClick, typographyProps: isTextButton
            ? { color: 'secondary', variant: 'button_tertiary' }
            : { color: 'primary', variant: 'button_secondary' }, dataTestId: 'logout-button', startSlot: isTextButton ? jsxRuntime.jsx(logout.ReactComponent, {}) : undefined, expanded: !isTextButton, type: 'button', children: "Log out" }));
};

exports.LogoutButton = LogoutButton;
