const express = require("express");
const studAuthController = require("../controllers/studAuthController");
const { authToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", studAuthController.authenticateStudent);
// router.post('/signup', authToken, studAuthController.signupStudent);

module.exports = router;
