const express = require("express");
const studAuthController = require("../controllers/studAuthController");
const adminAuthController = require("../controllers/adminAuthController");
const { authToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/student/login", studAuthController.authenticateStudent);
router.post("/admin/login", adminAuthController.authenticateAdmin);
router.post("/admin/signup", adminAuthController.signupAdmin);

module.exports = router;
