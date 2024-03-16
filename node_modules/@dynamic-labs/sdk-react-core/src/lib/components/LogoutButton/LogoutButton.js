import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgLogout } from '../../shared/assets/logout.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { Button } from '../Button/Button.js';

const LogoutButton = ({ buttonClassName = '', isTextButton = false, }) => {
    const [loading, setLoading] = useState(false);
    const { handleLogOut } = useInternalDynamicContext();
    const onLogOutClick = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield handleLogOut();
        }
        catch (e) {
            logger.error(e);
        }
        finally {
            setLoading(false);
        }
    });
    return (jsx(Button, { buttonClassName: buttonClassName, buttonVariant: 'tertiary', buttonPadding: isTextButton ? 'none' : 'medium', loading: loading, disabled: loading, onClick: onLogOutClick, typographyProps: isTextButton
            ? { color: 'secondary', variant: 'button_tertiary' }
            : { color: 'primary', variant: 'button_secondary' }, dataTestId: 'logout-button', startSlot: isTextButton ? jsx(SvgLogout, {}) : undefined, expanded: !isTextButton, type: 'button', children: "Log out" }));
};

export { LogoutButton };
