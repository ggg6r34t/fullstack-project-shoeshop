import { Request, Response, NextFunction } from "express";

import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductByIdService,
  deleteProductByIdService,
} from "../services/products";
import Product from "../models/Product";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await getAllProductsService();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await getProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    image,
    additionalImage,
    price,
    product_details,
    category,
    sizes,
    material,
    color,
    insole,
    outsole,
    heel_height,
    heel_type,
    sale,
  } = req.body;
  const productInfo = new Product({
    title: title,
    image: image,
    additionalImage: additionalImage,
    price: price,
    product_details: product_details,
    category: category,
    sizes: sizes,
    material: material,
    color: color,
    insole: insole,
    outsole: outsole,
    heel_height: heel_height,
    heel_type: heel_type,
    sale: sale,
  });
  try {
    const product = await createProductService(productInfo);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const newProductInfo = req.body;
    const product = await updateProductByIdService(productId, newProductInfo);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await deleteProductByIdService(productId);
    res.status(204).json(product);
  } catch (error) {
    next(error);
  }
};
