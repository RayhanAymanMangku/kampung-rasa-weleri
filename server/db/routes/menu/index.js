const express = require("express");
const router = express.Router();
const menusController = require("../../controllers/menu");

router.get("/api/v1/data-menu", menusController.getDataMenus);
router.post("/api/v1/data-menu", menusController.createMenu);
router.delete("/api/v1/data-menu/:idMenu", menusController.deleteMenu);
module.exports = router;
