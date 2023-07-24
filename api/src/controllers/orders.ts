import { NextFunction, Request, Response } from "express";
import Order from "../models/Order";
import {
  createOrderService,
  getOrderByUserIdService,
} from "../services/orders";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: req.params.id,
      productList: req.body.productList,
    });
    const order = await createOrderService(newOrder);
    // response to frontend
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderId = req.params.id;
    const order = await getOrderByUserIdService(orderId);
    // response to frontend
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
