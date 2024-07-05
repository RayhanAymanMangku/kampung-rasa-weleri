const express = require("express");
const router = express.Router();
const paymentDineInController = require("../../controllers/payment_dinein");

router.post(
  "/api/create-transaction-dinein",
  paymentDineInController.createTransaction
);

module.exports = router;
