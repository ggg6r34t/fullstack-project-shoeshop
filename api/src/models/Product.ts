import mongoose, { Document } from "mongoose";

// Product: Shoes

// item number:
// title:
// image:
// price:
// product details:
// category: ankle boots, oxford sheos, loafers, monks, derbies, sneakers, boat shoes, mules, sandals
// sizes: 39, 40, 41, 42, 43, 44, 45, 46, 47
// material: Leather, Suede, Patent Leather, Canvas, Mesh, Synthetic, Fabric, Rubber
// color:
// insole:
// outsole:
// heel height:
// heel type:
// sale: (yes or no)
// isLogin: boolean;
// quantity: number;

// type from TypeScript and Mongoose (Document)
export type ProductDocument = Document & {
  title: string;
  image: string;
  additionalImage: string[];
  price: number;
  product_details: string;
  category: string;
  sizes: string[];
  material: string;
  color: string;
  insole: string;
  outsole: string;
  heel_height: string;
  heel_type: string;
  sale: boolean;
};

// type from database
export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  additionalImage: { type: [String] },
  price: { type: Number },
  product_details: { type: String },
  category: { type: String },
  sizes: { type: [String] },
  material: { type: String },
  color: { type: String },
  insole: { type: String },
  outsole: { type: String },
  heel_height: { type: String },
  heel_type: { type: String },
  sale: { type: Boolean },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
