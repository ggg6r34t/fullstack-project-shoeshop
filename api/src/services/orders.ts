import { OrderDocument } from "../models/Order";

const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return await order.save();
};

export default { createOrderService };
