import { useState } from 'react';

const useHover = (initialValue = false, falseOnClick = false) => {
    const [hover, setHover] = useState(initialValue);
    const handlers = {
        onMouseDown: () => setHover(true),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        onMouseUp: () => setHover(falseOnClick),
    };
    return [hover, handlers];
};

export { useHover };
