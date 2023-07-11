import { NotFoundError } from "../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return await order.save();
};

export const getOrderByUserIdService = async (
  orderId: string
): Promise<OrderDocument> => {
  const order = await Order.findById(orderId);
  if (!order) {
    throw new NotFoundError(`Order ${orderId} not found.`);
  }
  return order;
};
