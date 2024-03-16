"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidIcon = exports.AppleIcon = void 0;
const Iconic_1 = require("../../Iconic");
exports.AppleIcon = (0, Iconic_1.createIconic)({
    iconName: 'apple',
    alt: 'Apple',
    sourcePath: 'icons/mobile/apple.svg'
});
exports.AndroidIcon = (0, Iconic_1.createIconic)({
    iconName: 'android',
    alt: 'Android',
    sourcePath: 'icons/mobile/android.svg'
});
