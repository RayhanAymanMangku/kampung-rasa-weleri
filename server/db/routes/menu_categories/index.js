const express = require("express");
const router = express.Router();
const menuCatergoryController = require("../../controllers/menu_categories");

router.get("/api/v1/kategori-menu", menuCatergoryController.getKategoriMenu);

module.exports = router;
