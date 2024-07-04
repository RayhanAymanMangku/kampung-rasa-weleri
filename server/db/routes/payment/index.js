const express = require("express");
const router = express.Router();
const paymentController = require("../../controllers/payment");

router.post("/api/create-transaction", paymentController.createTransaction);

module.exports = router;
