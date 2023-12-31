import { Document } from "mongoose";

export interface Product extends Document {
  SKU: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  favourite: boolean;
  images: string;
  createDate: Date;
  updatedDate: Date;
  timestamps?: {};
}
