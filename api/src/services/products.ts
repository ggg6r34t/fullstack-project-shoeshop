import { NotFoundError } from "../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

// Communicates with the database
export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

export const getAllProductsService = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ price: 1 });
};

export const getProductByCategoryService = async (
  category: string
): Promise<ProductDocument[]> => {
  const products = await Product.find({ category }).sort({ price: 1 });
  if (!products) {
    throw new NotFoundError(`Product in the ${category} not found.`);
  }
  return products;
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new NotFoundError(`Product ${productId} not found.`);
  }
  return product;
};

export const updateProductByIdService = async (
  productId: string,
  newProductInfo: Partial<ProductDocument>
): Promise<ProductDocument> => {
  const product = await Product.findByIdAndUpdate(productId, newProductInfo, {
    new: true,
  });
  if (!product) {
    throw new NotFoundError(`Product ${productId} not found.`);
  }
  return product;
};

export const deleteProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    throw new NotFoundError(`Product ${productId} not found.`);
  }
  return product;
};
