'use strict';

/* eslint-disable no-underscore-dangle */
class ApiEndpoint {
}
ApiEndpoint.getBaseUrl = () => {
    if (!ApiEndpoint.__defined__) {
        throw new Error('ApiEndpoint Base URL has not been initialized');
    }
    return ApiEndpoint.__baseUrl__;
};
ApiEndpoint.setBaseUrl = (baseUrlInput) => {
    if (!ApiEndpoint.__defined__) {
        ApiEndpoint.__baseUrl__ = baseUrlInput;
        ApiEndpoint.__defined__ = true;
    }
    else if (ApiEndpoint.__baseUrl__ !== baseUrlInput) {
        throw new Error(`ApiEndpoint baseUrl is already set to ${ApiEndpoint.__baseUrl__}, cannot change it to ${baseUrlInput}`);
    }
    Object.freeze(ApiEndpoint);
};

module.exports = ApiEndpoint;
