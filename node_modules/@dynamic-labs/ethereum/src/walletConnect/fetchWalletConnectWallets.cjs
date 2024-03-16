'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectV2 = require('./walletConnectV2.cjs');
var walletConnect = require('./walletConnect.cjs');

const fetchWalletConnectWallets = ({ isWalletConnectV2Enabled, walletBook, }) => {
    var _a;
    return Object.values((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {})
        .filter((wallet) => wallet.walletConnect && !wallet.filterFromWalletConnect)
        .map((wallet) => {
        var _a;
        const { shortName } = wallet;
        const name = shortName || wallet.name;
        // justification: we filtered out null/undefined above
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (isWalletConnectV2Enabled &&
            ((_a = wallet.walletConnect.sdks) === null || _a === void 0 ? void 0 : _a.includes('sign_v2'))) {
            return class extends walletConnectV2.WalletConnectV2 {
                constructor(props) {
                    super(Object.assign(Object.assign({}, props), { walletName: name }));
                }
            };
        }
        else {
            return class extends walletConnect.WalletConnect {
                constructor(props) {
                    super(Object.assign(Object.assign({}, props), { walletName: name }));
                }
            };
        }
    });
};
const getWalletConnectConnector = ({ isWalletConnectV2Enabled, }) => isWalletConnectV2Enabled
    ? class extends walletConnectV2.WalletConnectV2 {
        constructor(props) {
            super(Object.assign(Object.assign({}, props), { walletName: 'WalletConnect' }));
        }
    }
    : class extends walletConnect.WalletConnect {
        constructor(props) {
            super(Object.assign(Object.assign({}, props), { walletName: 'WalletConnect' }));
        }
    };

exports.fetchWalletConnectWallets = fetchWalletConnectWallets;
exports.getWalletConnectConnector = getWalletConnectConnector;
