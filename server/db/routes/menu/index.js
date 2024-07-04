const express = require("express");
const router = express.Router();
const menusController = require("../../controllers/menu");

router.get("/api/v1/data-menu", menusController.getDataMenus);

module.exports = router;
