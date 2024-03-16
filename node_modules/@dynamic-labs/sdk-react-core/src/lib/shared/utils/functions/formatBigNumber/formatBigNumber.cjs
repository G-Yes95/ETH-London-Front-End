'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');
var ceil = require('../ceil/ceil.cjs');
var trimEnd = require('../trimEnd/trimEnd.cjs');

const formatBigNumber = (value, precision = 0) => {
    const formatted = viem.formatEther(value);
    if (!precision) {
        return formatted;
    }
    const floatValue = parseFloat(formatted);
    const formattedAtPrecision = ceil.ceil(floatValue, precision).toFixed(precision);
    const [integerPart, decimalPart] = formattedAtPrecision.split('.');
    const decimalPartTrimmed = trimEnd.trimEnd(decimalPart, '0');
    return `${integerPart}.${decimalPartTrimmed || '0'}`;
};

exports.formatBigNumber = formatBigNumber;
