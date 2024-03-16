import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';

const getSlideInUpTransitionDefaultStyles = (duration, curve = 'linear') => ({
    transition: `transform ${duration}ms ${curve}, opacity ${duration}ms ${curve}`,
});
const transitionStyles = {
    ENTERED: {
        transform: 'translateY(0)',
    },
    ENTERING: {
        transform: 'translateY(0.625rem)',
    },
    EXITING: {
        transform: 'translateY(0.625rem)',
    },
};
const UnoptimizedSlideInUpTransition = (_a) => {
    var { children } = _a, transitionProps = __rest(_a, ["children"]);
    const { mount, stage, currentDuration } = useTransition(transitionProps);
    const defaultStyles = getSlideInUpTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return jsx("div", { style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children });
};
const SlideInUpTransition = React__default.memo(UnoptimizedSlideInUpTransition);

export { SlideInUpTransition, UnoptimizedSlideInUpTransition };
