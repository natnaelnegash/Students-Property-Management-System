const express = require("express");
const router = express.Router();
const studentRoutes = require("./studentRoutes");
const authRoutes = require("./authRoutes");

router.use("/students", studentRoutes);
router.use("/auth", authRoutes);

module.exports = router;
