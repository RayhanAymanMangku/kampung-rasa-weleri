const express = require("express");
const chatbotController = require("../../controllers/chatbot");
const router = express.Router();

router.post("/api/v1/chatbot", chatbotController.handleChatbotRequest);

module.exports = router;
