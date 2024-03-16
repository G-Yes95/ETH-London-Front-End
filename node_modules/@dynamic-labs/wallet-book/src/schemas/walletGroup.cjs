'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var nonEmptyString = require('./utils/nonEmptyString.cjs');

const walletGroupSchema = zod.z.object({
    brand: zod.z
        .object({
        alt: nonEmptyString.nonEmptyString,
        imageId: nonEmptyString.nonEmptyString,
        primaryColor: nonEmptyString.nonEmptyString,
        spriteId: nonEmptyString.nonEmptyString,
    })
        .optional()
        .refine((val) => {
        if (!val)
            return true;
        if (!(val.spriteId && val.imageId) && (val.spriteId || val.imageId)) {
            return true;
        }
        return false;
    }, {
        message: 'Only one of spriteId or imageId can be defined',
        path: ['brand'],
    }),
    key: zod.z.string(),
    name: zod.z.string(),
});

exports.walletGroupSchema = walletGroupSchema;
