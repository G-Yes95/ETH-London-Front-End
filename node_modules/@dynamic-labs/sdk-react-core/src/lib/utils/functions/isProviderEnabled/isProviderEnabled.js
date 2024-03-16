const isProviderEnabled = (providers, provider) => providers.some((providerItem) => providerItem.provider === provider && Boolean(providerItem.enabledAt));

export { isProviderEnabled };
