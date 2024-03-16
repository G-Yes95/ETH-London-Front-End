'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * I'm exporting the walletName to use it for DYN-1447. As we only need the wallet name,
 * exporting it in this way, we avoid to instantiate the whole PhantomLedger class every time.
 */
const PhantomLedgerWalletName = 'Phantom Ledger';

exports.PhantomLedgerWalletName = PhantomLedgerWalletName;
