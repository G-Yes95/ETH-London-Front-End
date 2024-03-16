import { z } from 'zod';
import { nonEmptyString } from './utils/nonEmptyString.js';

const walletGroupSchema = z.object({
    brand: z
        .object({
        alt: nonEmptyString,
        imageId: nonEmptyString,
        primaryColor: nonEmptyString,
        spriteId: nonEmptyString,
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
    key: z.string(),
    name: z.string(),
});

export { walletGroupSchema };
