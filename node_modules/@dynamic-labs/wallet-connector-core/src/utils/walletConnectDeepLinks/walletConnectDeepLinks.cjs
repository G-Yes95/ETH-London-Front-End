'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const getConnectionDeepLink = (uri, metadata, preference) => {
    // on android, the connection deeplink is simply the uri
    // see: https://docs.walletconnect.com/mobile-linking#for-android
    if (utils.isAndroid()) {
        return uri;
    }
    const deepLink = getRegularDeepLink(uri, metadata, preference);
    return `${deepLink}?uri=${encodeURIComponent(uri)}`;
};
const getRegularDeepLink = (uri, metadata, preference) => {
    var _a, _b, _c, _d;
    if (utils.isAndroid()) {
        // on android, the deeplink is simply the uri, without the query params
        // see: https://docs.walletconnect.com/mobile-linking#for-android
        return uri.split('?')[0];
    }
    const index = utils.isMobile() ? 'mobile' : 'desktop';
    let origin;
    if (preference === 'native') {
        origin = ((_a = metadata[index]) === null || _a === void 0 ? void 0 : _a.native) || ((_b = metadata[index]) === null || _b === void 0 ? void 0 : _b.universal);
    }
    else {
        origin = ((_c = metadata[index]) === null || _c === void 0 ? void 0 : _c.universal) || ((_d = metadata[index]) === null || _d === void 0 ? void 0 : _d.native);
    }
    return origin || '';
};
const getDeepLink = ({ mode, uri = '', metadata, preference, }) => {
    switch (mode) {
        case 'connection':
            return getConnectionDeepLink(uri, metadata, preference);
        case 'regular':
            return getRegularDeepLink(uri, metadata, preference);
    }
};

exports.getDeepLink = getDeepLink;
