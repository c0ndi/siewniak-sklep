import express from "express";
import {
  renderProduct,
  renderAllProducts,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/products/:id", renderProduct);
router.get("/products", renderAllProducts);

export default router;
