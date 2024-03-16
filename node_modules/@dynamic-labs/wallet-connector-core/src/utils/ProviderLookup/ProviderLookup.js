const ProviderLookup = (installedProviders, providerFlags) => {
    if (providerFlags.length === 0) {
        return undefined;
    }
    return installedProviders.find((provider) => {
        const providerFlagMatch = providerFlags.every((condition) => {
            const flagValue = (provider === null || provider === void 0 ? void 0 : provider[condition.flag]) || false;
            return flagValue === condition.value;
        });
        return providerFlagMatch === true;
    });
};

export { ProviderLookup };
