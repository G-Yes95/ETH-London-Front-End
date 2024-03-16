import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation } from './en/translation.js';
import { deepMerge } from './helpers/deepMerge.js';

class Locale {
    static setResources(customResources) {
        if (Locale.__resources__) {
            return;
        }
        if (!customResources) {
            Locale.__resources__ = {
                en: { translation: translation },
            };
            return;
        }
        const sdkResources = {};
        Object.keys(customResources).forEach((lang) => {
            const mergedResource = Object.assign({}, translation);
            sdkResources[lang] = {
                translation: deepMerge(mergedResource, customResources[lang]),
            };
        });
        Locale.__resources__ = sdkResources;
    }
    static setup(resources) {
        if (Locale.__i18nInstance__) {
            return Locale.__i18nInstance__;
        }
        Locale.setResources(resources);
        i18n.use(initReactI18next).init({
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
            lng: 'en',
            resources: Locale.getResources(),
        });
        Locale.__i18nInstance__ = i18n;
        return i18n;
    }
    static getInstance() {
        return Locale.__i18nInstance__;
    }
}
Locale.getResources = () => Locale.__resources__;

export { Locale, Locale as default };
