const express = require("express");
const adminController = require("../../controllers/admin");
const router = express.Router();

router.get("/api/v1/admin", adminController.getStaff);
router.delete("/api/v1/admin", adminController.deleteStaff);

module.exports = router;
