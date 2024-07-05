const express = require("express");
const router = express.Router();
const incomeController = require("../../controllers/income");

router.get("/api/v1/income", incomeController.getIncome);

module.exports = router;
