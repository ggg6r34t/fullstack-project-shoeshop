import { NotFoundError } from "../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return await order.save();
};

export const getOrderByUserIdService = async (
  userId: string
): Promise<OrderDocument[]> => {
  const order = await Order.find({ userId: userId }).populate({
    path: "userId",
  });
  if (!order) {
    throw new NotFoundError(`Order with the user id ${userId} not found.`);
  }
  return order;
};
