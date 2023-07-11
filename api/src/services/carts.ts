import { CartDocument } from "../models/Cart";

const createCartService = async (cart: CartDocument): Promise<CartDocument> => {
  return await cart.save();
};

export default { createCartService };
