const express = require("express");
const router = express.Router();
const orders2Controller = require("../../controllers/orders_2");

router.get("/api/v1/dinein-orders", orders2Controller.getDineInOrders);
router.post("/api/v1/dinein-orders", orders2Controller.createDineInOrder);
router.get(
  "/api/v1/dinein-orders/pesanan/:idPesanan",
  orders2Controller.getDineInOrders
); // Add this route

module.exports = router;
