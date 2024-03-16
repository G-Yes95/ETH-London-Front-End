const isUnsupportedProviderError = (error) => {
    const isObject = typeof error === 'object';
    if (!isObject)
        return false;
    const isUnsupportedProviderErrorReason = error['reason'] === 'unsupported provider';
    return isUnsupportedProviderErrorReason;
};

export { isUnsupportedProviderError };
