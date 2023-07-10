import { NextFunction, Request, Response } from "express";
import Order from "../models/Order";
import OrderServices from "../services/orders";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: req.params.userId,
      productList: req.body,
    });
    const order = await OrderServices.createOrderService(newOrder);
    // response to frontend
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
