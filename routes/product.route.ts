import { Router } from "express";
import {
  getProducts,
  getFavouriteProducts,
  getImage,
  getProduct,
  addProduct,
  updateProduct,
  toggleFavouriteProduct,
  deleteProduct,
} from "../controllers/product.controller";

import { upload } from "../config/multer.config";

const router: Router = Router();

router.post("/", [upload.single("images")], addProduct);

router.get("/", getProducts);

router.get("/favourites", getFavouriteProducts);

router.get("/image/:filename", getImage);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.patch("/favourite/:id", toggleFavouriteProduct);

router.delete("/:id", deleteProduct);

export default router;
