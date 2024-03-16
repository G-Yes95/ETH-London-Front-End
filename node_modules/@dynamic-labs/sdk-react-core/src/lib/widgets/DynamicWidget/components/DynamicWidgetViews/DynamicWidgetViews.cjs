'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var WalletsView = require('../../views/WalletsView/WalletsView.cjs');
var ProfileView = require('../../views/ProfileView/ProfileView.cjs');
var EditProfileView = require('../../views/EditProfileView/EditProfileView.cjs');
var SendBalanceWidgetView = require('../../views/SendBalanceWidgetView/SendBalanceWidgetView.cjs');
var ManagePasskeysWidgetView = require('../../views/ManagePasskeysWidgetView/ManagePasskeysWidgetView.cjs');

const mapViewToComponent = {
    'edit-profile': EditProfileView.EditProfileView,
    'manage-passkeys': ManagePasskeysWidgetView.ManagePasskeysWidgetView,
    profile: ProfileView.ProfileView,
    'send-balance': SendBalanceWidgetView.SendBalanceWidgetView,
    wallets: WalletsView.WalletsView,
};
const DynamicWidgetViews = () => {
    const { dynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const ViewComponent = mapViewToComponent[dynamicWidgetView] || mapViewToComponent.wallets;
    return jsxRuntime.jsx(ViewComponent, {});
};

exports.DynamicWidgetViews = DynamicWidgetViews;
exports.mapViewToComponent = mapViewToComponent;
