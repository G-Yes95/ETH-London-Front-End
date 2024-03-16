import { __awaiter } from '../../_virtual/_tslib.js';
import { createPublicClient, custom } from 'viem';
import { getWalletBookWallet } from '@dynamic-labs/wallet-book';
import { LegacyEthProviderHelper } from '../legacyEthProviderHelper.js';
import { EthWalletConnector } from '../EthWalletConnector.js';
import { WalletConnectV2 } from '../walletConnect/walletConnectV2.js';
import { WalletConnect } from '../walletConnect/walletConnect.js';

class LegacyInjectedWalletBase extends EthWalletConnector {
    constructor() {
        super(...arguments);
        this.supportedChains = ['ETH', 'EVM'];
        this.connectedChain = 'EVM';
        this.walletConnectorFallback = false;
    }
    getMobileOrInstalledWallet() {
        var _a, _b, _c;
        if (this.walletConnectorFallback && !this.isInstalledOnBrowser()) {
            const wallet = getWalletBookWallet(this.walletBook, this.key);
            if (((_a = this.constructorProps) === null || _a === void 0 ? void 0 : _a.isWalletConnectV2Enabled) &&
                ((_c = (_b = wallet.walletConnect) === null || _b === void 0 ? void 0 : _b.sdks) === null || _c === void 0 ? void 0 : _c.includes('sign_v2'))) {
                return new WalletConnectV2(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
            else {
                return new WalletConnect(Object.assign(Object.assign({}, this.constructorProps), { walletName: this.name }));
            }
        }
        return this;
    }
    setupEventListeners() {
        const provider = LegacyEthProviderHelper.findProvider(this.name);
        if (!provider) {
            return;
        }
        const publicClient = createPublicClient({ transport: custom(provider) });
        const { tearDownEventListeners } = LegacyEthProviderHelper._setupEventListeners(this.name, this, publicClient);
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient() {
        return LegacyEthProviderHelper.findWalletClient(this.name);
    }
    isInstalledOnBrowser() {
        return LegacyEthProviderHelper.isInstalledHelper(this.name);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchPublicAddress();
        });
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return LegacyEthProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return LegacyEthProviderHelper.signMessageWithName(messageToSign, this.name);
        });
    }
    proveOwnership(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signMessage(messageToSign);
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            // nothing to do on browser-based metamask
            return;
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        const _super = Object.create(null, {
            providerSwitchNetwork: { get: () => super.providerSwitchNetwork }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.providerSwitchNetwork.call(this, { network, provider });
        });
    }
}

export { LegacyInjectedWalletBase as default };
