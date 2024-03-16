'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
var Image = require('../Image/Image.cjs');

const UserAvatar = ({ user }) => {
    const getConnectedSocialAccountAvatarUrl = () => {
        var _a, _b, _c;
        const avatarUrl = (_c = (_b = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credential) => {
            var _a;
            return user.lastVerifiedCredentialId === credential.id &&
                ((_a = credential.oauthAccountPhotos) === null || _a === void 0 ? void 0 : _a.length);
        })) === null || _b === void 0 ? void 0 : _b.oauthAccountPhotos) === null || _c === void 0 ? void 0 : _c[0];
        return avatarUrl;
    };
    return (jsxRuntime.jsx("div", { className: 'user-profile-social-account__connected-avatar', children: jsxRuntime.jsx(Image.Image, { src: getConnectedSocialAccountAvatarUrl(), alt: 'User avatar', dataTestId: 'user-avatar', fallback: jsxRuntime.jsx(iconic.UserProfileIcon, {}) }) }));
};

exports.UserAvatar = UserAvatar;
