import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useState, useEffect } from 'react';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';

const useFetchNameService = (address) => {
    const [nameService, setNameService] = useState(undefined);
    const { getNameService } = useInternalDynamicContext();
    useEffect(() => {
        const fetchNameService = () => __awaiter(void 0, void 0, void 0, function* () {
            const ns = yield getNameService(address);
            setNameService(ns);
        });
        fetchNameService();
    }, [getNameService, address]);
    return nameService;
};

export { useFetchNameService };
