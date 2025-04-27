const express = require("express");
const router = express.Router();
const studentRoutes = require("./studentRoutes");
const adminRoutes = require("./adminRoutes");
const authRoutes = require("./authRoutes");

// router.use("/student", studentRoutes);
router.use("/admin", adminRoutes);
router.use("/auth", authRoutes);

module.exports = router;
