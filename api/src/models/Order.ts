import mongoose, { Document } from "mongoose";

import { ProductDocument } from "./Product";

export type ProductOrder = ProductDocument & {
  quantity: number;
};

// type from TypeScript and Mongoose (Document)
export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductOrder[];
  userId: string;
};

const ProductOrderSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  image: { type: String },
  size: { type: String },
  quantity: { type: Number },
});

// type from database
const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now, required: true },
  // syntax embed
  productList: [ProductOrderSchema],
  // ref to User Document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: { type: Number },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
