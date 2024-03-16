import { jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const IsBrowser = ({ children }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    // this useEffect does not run during SSR
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    if (!isBrowser) {
        // Justification: We specifically need to return an element instead of null
        // in order to have stable content during SSR
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return jsx(Fragment, {});
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsx(Fragment, { children: children });
};

export { IsBrowser };
