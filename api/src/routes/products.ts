import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
  updateProductById,
} from "../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/products/category/:category", getProductByCategory);
router.get("/products/:id", getProductById);
router.patch("/:id", updateProductById);

export default router;
