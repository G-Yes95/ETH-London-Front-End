import EventEmitter from 'eventemitter3';

// This file is temporary and should be removed after QNTM-180 is done
const getInternalEvents = () => new EventEmitter();

export { getInternalEvents };
