const express = require("express");
const router = express.Router();
const reservasiController = require("../../controllers/reservasi");

router.get("/api/v1/data-reservasi", reservasiController.getAllReservasi);
router.post("/api/v1/data-reservasi", reservasiController.createReservasi);
router.delete(
  "/api/v1/data-reservasi/:id",
  reservasiController.deleteReservasi
);

module.exports = router;
