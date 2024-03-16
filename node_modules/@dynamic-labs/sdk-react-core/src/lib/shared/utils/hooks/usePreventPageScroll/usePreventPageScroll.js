import { useEffect } from 'react';
import { isIOS } from '@dynamic-labs/utils';

const usePreventPageScroll = (isOpen) => {
    useEffect(() => {
        var _a;
        if (!isOpen)
            return;
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        /* istanbul ignore next */
        if (!html || !body)
            return;
        // https://developer.mozilla.org/en-US/docs/Web/API/Screen/height
        const deviceScreenHeight = (_a = window === null || window === void 0 ? void 0 : window.screen) === null || _a === void 0 ? void 0 : _a.height;
        const isScrollable = body.scrollHeight > deviceScreenHeight;
        // Don't prevent scroll if the page is not scrollable
        // If we don't know the device screen height, we can't know if the page is scrollable
        /* istanbul ignore else */
        if (!isScrollable || deviceScreenHeight === 0)
            return;
        html.classList.add('dynamic-no-scroll');
        body.classList.add('dynamic-no-scroll');
        const userScrollCoordinatesBeforeLock = {
            x: window.scrollX,
            y: window.scrollY,
        };
        // IOS Safari needs to have a different class to prevent scroll
        // We need to add postion: fixed to lock the body scrolling
        // It breaks the scroll position, so we need to save the scroll position and restore it after the modal is closed
        /* istanbul ignore else */
        if (isIOS()) {
            html.classList.add('dynamic-no-scroll--ios');
            body.classList.add('dynamic-no-scroll--ios');
        }
        return () => {
            html.classList.remove('dynamic-no-scroll');
            body.classList.remove('dynamic-no-scroll');
            // Restore the scroll position when user is using IOS
            /* istanbul ignore else */
            if (isIOS()) {
                html.classList.remove('dynamic-no-scroll--ios');
                body.classList.remove('dynamic-no-scroll--ios');
                window.scrollTo(userScrollCoordinatesBeforeLock.x, userScrollCoordinatesBeforeLock.y);
            }
        };
    }, [isOpen]);
};

export { usePreventPageScroll };
