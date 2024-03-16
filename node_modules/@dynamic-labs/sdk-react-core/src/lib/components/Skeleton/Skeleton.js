import { jsx } from 'react/jsx-runtime';

const Skeleton = ({ count = 1, className }) => {
    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(jsx("span", { className: `skeleton ${className} `, children: "\u200C" }));
    }
    return (jsx("span", { "data-testid": 'loading-skeleton-container', children: elements.map((element, id) => (jsx("span", { "data-testid": 'loading-skeleton', children: element }, `skeleton-${id}`))) }));
};

export { Skeleton };
