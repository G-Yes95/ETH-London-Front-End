import { findEmbeddedWalletFromVerifiedCredentials } from '../findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js';

const isEmbeddedWalletPresent = (jwt) => Boolean(findEmbeddedWalletFromVerifiedCredentials(jwt));

export { isEmbeddedWalletPresent };
