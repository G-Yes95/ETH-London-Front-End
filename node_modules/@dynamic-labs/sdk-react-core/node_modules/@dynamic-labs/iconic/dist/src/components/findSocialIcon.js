"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSocialIcon = void 0;
const getSocialIcon_1 = require("./getSocialIcon");
const findSocialIcon = (name, variant = 'light') => {
    try {
        return (0, getSocialIcon_1.getSocialIcon)(name, variant);
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
exports.findSocialIcon = findSocialIcon;
