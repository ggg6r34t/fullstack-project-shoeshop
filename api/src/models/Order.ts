import mongoose, { Document } from "mongoose";
import { ProductDocument, ProductSchema } from "./Product";

// type from TypeScript and Mongoose (Document)
export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductDocument[];
  userId: string;
};

// type from database
const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  // syntax embed
  productList: [ProductSchema],
  // ref to User Document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
