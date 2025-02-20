import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

// Create Order
router.post("/", createOrder);

// Get Orders
router.get("/", getOrders);

export default router;
