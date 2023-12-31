import { model, Schema, Model } from "mongoose";
import { Product } from "../types/product";

const ProductSchema: Schema = new Schema({
  SKU: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  favourite: { type: Boolean, required: false },
  images: { type: String, required: false },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  timestamps: { createDate: Date, updatedDate: Date },
});

export const ProductModel: Model<Product> = model<Product>(
  "products",
  ProductSchema
);
