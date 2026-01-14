const express = require("express");
const router = express.Router();
const { getOrdersByCategory } = require("../controllers/orderController");

// GET /api/orders/revenue
router.get("/get", getOrdersByCategory);

module.exports = router;
