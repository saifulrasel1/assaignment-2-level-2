"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidationProduct = void 0;
const zod_1 = require("zod");
// Define Zod schema for Tvariant
const TvariantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const TinventorthSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
const TproductSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    description: zod_1.z.string(),
    variants: zod_1.z.array(TvariantSchema),
    inventory: TinventorthSchema,
});
exports.zodValidationProduct = TproductSchema;
