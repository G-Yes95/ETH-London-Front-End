const findOrCreateLinkTag = () => {
    const existingStyleTag = document.querySelector('[data-source="dynamic-theme-cdn"]');
    if (existingStyleTag) {
        return existingStyleTag;
    }
    const linkTag = document.createElement('link');
    document.head.append(linkTag);
    linkTag.dataset.source = 'dynamic-theme-cdn';
    linkTag.rel = 'stylesheet';
    return linkTag;
};
const findOrCreateStyleTag = () => {
    const existingStyleTag = document.querySelector('[data-source="dynamic-theme"]');
    if (existingStyleTag) {
        return existingStyleTag;
    }
    const styleTag = document.createElement('style');
    document.head.append(styleTag);
    styleTag.dataset.source = 'dynamic-theme';
    return styleTag;
};
const buildStylesheet = (theme) => {
    const { customColor, brandStyle } = theme;
    const footerBackgroundColor = brandStyle === 'bold' ? customColor : undefined;
    const footerIconColor = brandStyle === 'subtle' ? customColor : undefined;
    const cssAttributes = [
        ['--dynamic-brand-primary-color', customColor],
        ['--dynamic-badge-dot-background', customColor],
        ['--dynamic-footer-background-color', footerBackgroundColor],
        ['--dynamic-footer-icon-color', footerIconColor],
    ];
    return `@layer dynamic-project-environment-theme {
  #dynamic-widget, #dynamic-modal, .dynamic-shadow-dom {
    ${cssAttributes
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n    ')}
  }
}`;
};

export { buildStylesheet, findOrCreateLinkTag, findOrCreateStyleTag };
