const express = require("express");
const router = express.Router();
const outcomeController = require("../../controllers/outcome");

router.post("/api/v1/outcome", outcomeController.createOutcome);
router.get("/api/v1/outcomes", outcomeController.getOutcomes);
router.delete("/api/v1/outcome", outcomeController.deleteOutcome);

module.exports = router;
