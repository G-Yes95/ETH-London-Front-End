import { z } from 'zod';
export declare const walletGroupSchema: z.ZodObject<{
    brand: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        alt: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        imageId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        primaryColor: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        spriteId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    }, "strip", z.ZodTypeAny, {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    }, {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    }>>, {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined, {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    } | undefined>;
    key: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
    name: string;
    brand?: {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
}, {
    key: string;
    name: string;
    brand?: {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    } | undefined;
}>;
export type WalletGroupSchema = z.infer<typeof walletGroupSchema>;
