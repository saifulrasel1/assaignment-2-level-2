import mongoose, { Schema, model } from "mongoose";
import { Tproduct, Tvariant } from "./product.interface";

const variantSchema = new Schema<Tvariant>({
  type: { type: String },
  value: { type: String },
});

const productSchema = new Schema<Tproduct>({
  name: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  description: { type: String },
  variants: [variantSchema], 
});

export const ProductModel = model<Tproduct>('Product', productSchema);


