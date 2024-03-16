import { useRef } from 'react';

const useElementById = (elementId = 'dynamic-modal') => {
    const modalRootElement = useRef(null);
    if (typeof window !== 'undefined') {
        modalRootElement.current = window.document.getElementById(elementId);
        // creates div and attaches it to the body
        if (!modalRootElement.current) {
            modalRootElement.current = window.document.createElement('div');
            modalRootElement.current.setAttribute('id', elementId);
            modalRootElement.current.setAttribute('class', elementId);
            modalRootElement.current.setAttribute('data-testid', elementId);
            /**
             * Setting the pointer-events to auto is necessary to allow the user to interact with the modal
             * when other packages that use a modal set the pointer-events to none on the body element.
             * For example: https://reservoir.tools/ use chakra-ui and sets the pointer-events to none on the body element.
             */
            modalRootElement.current.style.pointerEvents = 'auto';
            window.document.body.appendChild(modalRootElement.current);
        }
    }
    return modalRootElement;
};

export { useElementById };
