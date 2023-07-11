import mongoose, { Document } from "mongoose";

type ProductOrderDocument = Document & {
  name: string;
  price: number;
  quantity: number;
};

const ProductOrderSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

// type from TypeScript and Mongoose (Document)
export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductOrderDocument[];
  userId: string;
};

// type from database
const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  // syntax embed
  productList: [ProductOrderSchema],
  // ref to User Document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
