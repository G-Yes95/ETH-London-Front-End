import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';

const isSameWalletName = (left, right) => normalizeWalletName(left) === normalizeWalletName(right);

export { isSameWalletName };
