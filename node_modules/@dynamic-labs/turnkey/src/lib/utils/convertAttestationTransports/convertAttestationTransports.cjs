'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');

const transportMap = {
    AUTHENTICATOR_TRANSPORT_BLE: sdkApi.AuthenticatorTransportProtocol.Ble,
    AUTHENTICATOR_TRANSPORT_HYBRID: sdkApi.AuthenticatorTransportProtocol.Hybrid,
    AUTHENTICATOR_TRANSPORT_INTERNAL: sdkApi.AuthenticatorTransportProtocol.Internal,
    AUTHENTICATOR_TRANSPORT_NFC: sdkApi.AuthenticatorTransportProtocol.Nfc,
    AUTHENTICATOR_TRANSPORT_USB: sdkApi.AuthenticatorTransportProtocol.Usb,
};
const convertAttestationTransports = (attestationTransports) => attestationTransports.map((transport) => transportMap[transport]);

exports.convertAttestationTransports = convertAttestationTransports;
