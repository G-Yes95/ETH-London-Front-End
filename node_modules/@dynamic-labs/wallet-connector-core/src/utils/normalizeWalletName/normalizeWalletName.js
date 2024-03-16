const normalizeWalletName = (name) => name.replace(/\W/g, '').toLowerCase();

export { normalizeWalletName };
