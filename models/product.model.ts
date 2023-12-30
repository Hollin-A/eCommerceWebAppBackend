import { model, Schema, Model } from "mongoose";
import { IProduct } from "../types/product";

const ProductSchema: Schema = new Schema({
  SKU: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  unitPrice: { type: Number, required: false },
  quantity: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  timestamps: { createDate: Date, updatedDate: Date },
});

export const ProductModel: Model<IProduct> = model<IProduct>(
  "products",
  ProductSchema
);
