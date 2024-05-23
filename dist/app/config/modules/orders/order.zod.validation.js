"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodvalidator = void 0;
const zod_1 = require("zod");
const TorderSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    quantity: zod_1.z.number().int().positive(),
});
exports.zodvalidator = TorderSchema;
