type InputKeyType = 'Escape';
type UseKeyboardEventListenerProps = {
    disabled?: boolean;
    inputKey: InputKeyType;
    onKeyPressed: () => void;
};
export declare const useKeyboardEventListener: ({ disabled, inputKey, onKeyPressed, }: UseKeyboardEventListenerProps) => void;
export {};
