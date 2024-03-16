'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const magicEmailOtpWalletConnectorKey = 'magicemailotp';
const magicSocialWalletConnectorKey = 'magicsocial';
const isMagicConnector = (connector) => connector.key === magicEmailOtpWalletConnectorKey ||
    connector.key === magicSocialWalletConnectorKey;

exports.isMagicConnector = isMagicConnector;
