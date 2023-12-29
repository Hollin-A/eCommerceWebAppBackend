import { Document } from "mongoose";

export interface IProduct extends Document {
  SKU: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  createDate: Date;
  updatedDate: Date;
  timestamps?: {};
}
