const express = require("express");
const router = express.Router();
const { sendWhatsAppMessage } = require("../../controllers/whatsapp");

// Route for sending WhatsApp message
router.post("/api/v1/send-whatsapp", sendWhatsAppMessage);

module.exports = router;
