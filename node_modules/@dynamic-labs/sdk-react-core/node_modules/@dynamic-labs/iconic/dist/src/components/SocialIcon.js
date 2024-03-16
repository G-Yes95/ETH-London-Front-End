"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const findSocialIcon_1 = require("./findSocialIcon");
const SocialIcon = (_a) => {
    var { name, variant } = _a, props = __rest(_a, ["name", "variant"]);
    const Icon = (0, findSocialIcon_1.findSocialIcon)(name, variant);
    if (!Icon)
        return null;
    return (0, jsx_runtime_1.jsx)(Icon, Object.assign({}, props));
};
exports.SocialIcon = SocialIcon;
