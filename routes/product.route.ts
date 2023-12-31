import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router: Router = Router();

router.post("/", addProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
