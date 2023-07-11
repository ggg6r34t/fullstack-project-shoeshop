import mongoose, { Document } from "mongoose";

type CartProductDocument = Document & {
  name: string;
  price: number;
  quantity: number;
};

const CartProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

// type from TypeScript and Mongoose (Document)
export type CartDocument = Document & {
  createdAt: Date;
  productList: CartProductDocument[];
  userId: string;
  quantity: number;
};

// type from database
const CartSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  // syntax embed
  productList: [CartProductSchema],
  // ref to User Document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quantity: { type: Number, required: true, default: 1 },
});

export default mongoose.model<CartDocument>("Cart", CartSchema);
