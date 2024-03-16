'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');

const useFetchNameService = (address) => {
    const [nameService, setNameService] = React.useState(undefined);
    const { getNameService } = useInternalDynamicContext.useInternalDynamicContext();
    React.useEffect(() => {
        const fetchNameService = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            const ns = yield getNameService(address);
            setNameService(ns);
        });
        fetchNameService();
    }, [getNameService, address]);
    return nameService;
};

exports.useFetchNameService = useFetchNameService;
