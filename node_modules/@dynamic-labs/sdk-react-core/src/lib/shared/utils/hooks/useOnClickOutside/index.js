import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            event.stopPropagation();
            const realTarget = event.composedPath().shift();
            if (!ref.current ||
                ref.current.contains(event.currentTarget) ||
                ref.current.contains(realTarget)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('touchstart', listener);
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
};

export { useOnClickOutside };
