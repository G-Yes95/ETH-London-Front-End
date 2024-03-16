import { jsx } from 'react/jsx-runtime';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { WalletsView } from '../../views/WalletsView/WalletsView.js';
import { ProfileView } from '../../views/ProfileView/ProfileView.js';
import { EditProfileView } from '../../views/EditProfileView/EditProfileView.js';
import { SendBalanceWidgetView } from '../../views/SendBalanceWidgetView/SendBalanceWidgetView.js';
import { ManagePasskeysWidgetView } from '../../views/ManagePasskeysWidgetView/ManagePasskeysWidgetView.js';

const mapViewToComponent = {
    'edit-profile': EditProfileView,
    'manage-passkeys': ManagePasskeysWidgetView,
    profile: ProfileView,
    'send-balance': SendBalanceWidgetView,
    wallets: WalletsView,
};
const DynamicWidgetViews = () => {
    const { dynamicWidgetView } = useWidgetContext();
    const ViewComponent = mapViewToComponent[dynamicWidgetView] || mapViewToComponent.wallets;
    return jsx(ViewComponent, {});
};

export { DynamicWidgetViews, mapViewToComponent };
