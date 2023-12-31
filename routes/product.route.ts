import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  toggleFavouriteProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router: Router = Router();

router.post("/", addProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.patch("/favourite/:id", toggleFavouriteProduct);

router.delete("/:id", deleteProduct);

export default router;
