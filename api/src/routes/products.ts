import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.patch("/:id", updateProductById);

export default router;
