const express = require("express");
const router = express.Router();
const orderChartController = require("../../../controllers/charts/orders");

router.get("/api/v1/order-chart/:year", orderChartController.getOrderChartData);

module.exports = router;
