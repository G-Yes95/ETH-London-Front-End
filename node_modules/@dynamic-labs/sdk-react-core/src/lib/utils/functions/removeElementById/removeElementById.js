const removeElementById = (elementId) => {
    let modalRootElement;
    if (typeof window !== 'undefined') {
        modalRootElement = window.document.getElementById(elementId);
        if (!modalRootElement) {
            return;
        }
        window.document.body.removeChild(modalRootElement);
    }
};

export { removeElementById };
