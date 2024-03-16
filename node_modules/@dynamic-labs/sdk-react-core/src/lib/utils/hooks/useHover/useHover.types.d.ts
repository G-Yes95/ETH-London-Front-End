export type MouseEventHandlers = {
    onMouseDown: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onMouseUp: () => void;
};
export type HoverHook = (initialValue?: boolean, falseOnClick?: boolean) => [boolean, MouseEventHandlers];
