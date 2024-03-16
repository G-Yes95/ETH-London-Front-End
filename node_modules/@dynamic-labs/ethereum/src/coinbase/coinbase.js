import { __rest, __awaiter } from '../../_virtual/_tslib.js';
import { createPublicClient, custom, createWalletClient } from 'viem';
import { EthWalletConnector } from '../EthWalletConnector.js';
import { LegacyEthProviderHelper } from '../legacyEthProviderHelper.js';
import { getCoinbaseProvider, fetchPublicAddress, signMessage, killCoinbaseSession } from './client/client.js';

class Coinbase extends EthWalletConnector {
    constructor(_a) {
        var { appName, appLogoUrl, evmNetworks } = _a, props = __rest(_a, ["appName", "appLogoUrl", "evmNetworks"]);
        super(Object.assign({ evmNetworks }, props));
        this.name = 'Coinbase';
        this.supportedChains = ['EVM', 'ETH'];
        this.connectedChain = 'EVM';
        this.canConnectViaQrCode = true;
        this.coinbaseProviderOpts = {
            appLogoUrl: appLogoUrl,
            appName: appName,
            evmNetworks: evmNetworks,
        };
    }
    setupEventListeners() {
        const provider = LegacyEthProviderHelper.findProvider(this.name);
        if (!provider) {
            return;
        }
        const { tearDownEventListeners } = LegacyEthProviderHelper._setupEventListeners(this.name, this, createPublicClient({ transport: custom(provider) }));
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient() {
        if (this.isInstalledOnBrowser()) {
            return LegacyEthProviderHelper.findWalletClient(this.name);
        }
        return createWalletClient({
            transport: custom(getCoinbaseProvider({
                opts: this.coinbaseProviderOpts,
            })),
        });
    }
    isInstalledOnBrowser() {
        return LegacyEthProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return LegacyEthProviderHelper.fetchPublicAddressWithName(this.name);
            }
            return fetchPublicAddress(this.coinbaseProviderOpts, opts);
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return LegacyEthProviderHelper.signMessageWithName(messageToSign, this.name);
            }
            return signMessage(this.coinbaseProviderOpts, messageToSign);
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser())
                return;
            killCoinbaseSession();
        });
    }
}

export { Coinbase };
