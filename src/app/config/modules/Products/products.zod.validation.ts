import { z } from 'zod';

// Define Zod schema for Tvariant
const TvariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});


const TinventorthSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});


const TproductSchema = z.object({
  id:z.string(),
  name: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  variants: z.array(TvariantSchema),
  inventory: TinventorthSchema,
});

export const zodValidationProduct = TproductSchema

