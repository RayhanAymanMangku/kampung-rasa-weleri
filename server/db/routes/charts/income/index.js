const express = require("express");
const router = express.Router();
const incomeController = require("../../../controllers/charts/income");

router.get("/api/v1/income/:year", incomeController.getIncomeData);

module.exports = router;
