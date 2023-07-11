import { NextFunction, Request, Response } from "express";
import Cart from "../models/Cart";
import CartServices from "../services/carts";

export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCart = new Cart({
      userId: req.params.userId,
      productList: req.body,
      quantity: req.body.quantity,
    });
    const order = await CartServices.createCartService(newCart);
    // response to frontend
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
