import express from "express";
import {
  renderCart,
  addToCart,
  checkout,
} from "../controllers/cartController.js";
const router = express.Router();

router.get("/cart", renderCart);
router.post("/cart/add", addToCart);
router.post("/cart/checkout", checkout);

export default router;
