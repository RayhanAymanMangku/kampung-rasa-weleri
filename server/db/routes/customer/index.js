const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/customer");

router.post("/api/v1/data-customer", customerController.addCustomer);
router.get("/api/v1/data-customer", customerController.getCustomers);
router.get(
  "/api/v1/data-customer/:idCustomer",
  customerController.getCustomerById
);
router.delete(
  "/api/v1/data-customer/:idCustomer",
  customerController.deleteCustomer
);

module.exports = router;
