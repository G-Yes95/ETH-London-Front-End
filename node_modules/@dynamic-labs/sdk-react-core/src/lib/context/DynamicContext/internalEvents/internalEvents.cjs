'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

// This file is temporary and should be removed after QNTM-180 is done
const getInternalEvents = () => new EventEmitter__default["default"]();

exports.getInternalEvents = getInternalEvents;
