const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/orders");

// takeaway
router.get(
  "/api/v1/data-orders/pesanan/:idPesanan",
  ordersController.getOrderDetailsByPesanan
);

router.get("/api/v1/data-orders", ordersController.getDataOrders);
router.post("/api/v1/data-orders", ordersController.createOrder);
router.delete("/api/v1/data-orders/:id", ordersController.deleteOrder);

module.exports = router;
