import  { Schema, model } from "mongoose";
import { Tinventory, Tproduct, Tvariant } from "./product.interface";

const variantSchema = new Schema<Tvariant>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<Tinventory>({
  quantity:{type:Number},
  inStock:{type:Boolean}
})

const productSchema = new Schema<Tproduct>({
  id:{type:String},
  name: { type: String },
  
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  description: { type: String },
  variants: [variantSchema], 
  inventory:inventorySchema
});

export const ProductModel = model<Tproduct>('Product', productSchema);


