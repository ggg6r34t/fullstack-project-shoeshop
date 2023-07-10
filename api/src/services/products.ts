import Product, { ProductDocument } from "../models/Product";

// Communicates with the database
export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument | undefined> => {
  try {
    return product.save();
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsService = async (): Promise<
  ProductDocument[] | undefined
> => {
  try {
    return Product.find().sort({ price: 1 });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      console.log("Product does not exit.");
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductByIdService = async (
  productId: string,
  newProductInfo: Partial<ProductDocument>
): Promise<ProductDocument | undefined | null> => {
  try {
    const product = await Product.findByIdAndUpdate(productId, newProductInfo, {
      new: true,
    });
    if (!product) {
      console.log("Product does not exit.");
    }

    return product;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      console.log("Product does not exit.");
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};
