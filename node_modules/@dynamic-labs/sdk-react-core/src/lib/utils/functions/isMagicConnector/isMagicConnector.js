const magicEmailOtpWalletConnectorKey = 'magicemailotp';
const magicSocialWalletConnectorKey = 'magicsocial';
const isMagicConnector = (connector) => connector.key === magicEmailOtpWalletConnectorKey ||
    connector.key === magicSocialWalletConnectorKey;

export { isMagicConnector };
