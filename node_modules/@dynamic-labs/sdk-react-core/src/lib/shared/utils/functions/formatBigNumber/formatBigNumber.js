import { formatEther } from 'viem';
import { ceil } from '../ceil/ceil.js';
import { trimEnd } from '../trimEnd/trimEnd.js';

const formatBigNumber = (value, precision = 0) => {
    const formatted = formatEther(value);
    if (!precision) {
        return formatted;
    }
    const floatValue = parseFloat(formatted);
    const formattedAtPrecision = ceil(floatValue, precision).toFixed(precision);
    const [integerPart, decimalPart] = formattedAtPrecision.split('.');
    const decimalPartTrimmed = trimEnd(decimalPart, '0');
    return `${integerPart}.${decimalPartTrimmed || '0'}`;
};

export { formatBigNumber };
