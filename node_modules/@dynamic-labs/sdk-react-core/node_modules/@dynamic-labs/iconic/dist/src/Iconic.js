"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconic = exports.ICONIC_SPRITE_URL = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const package_json_1 = require("../package.json");
exports.ICONIC_SPRITE_URL = `https://iconic.dynamic-static-assets.com/icons/sprite.svg?v=${package_json_1.version}`;
const createIconic = (props) => {
    const Icon = Object.assign(Object.assign({}, props), { function: (props) => {
            const url = `${exports.ICONIC_SPRITE_URL}#${Icon.iconName}`;
            return (0, jsx_runtime_1.jsx)("img", Object.assign({ "data-testid": `iconic-${Icon.iconName}`, src: url, alt: Icon.alt }, props));
        } });
    const IconicComponent = Icon.function.bind(Icon);
    Object.assign(IconicComponent, { iconName: Icon.iconName, sourcePath: Icon.sourcePath });
    return IconicComponent;
};
exports.createIconic = createIconic;
