const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authToken } = require("../middlewares/authMiddleware");

router.get("/getAllStudents", authToken, adminController.getAllStudents);
router.get("/getStudent/:schoolId", authToken, adminController.getStudent);
router.post("/createStudent", authToken, adminController.createStudent);
router.put(
  "/updateStudent/:schoolId",
  authToken,
  adminController.updateStudent
);
router.delete(
  "/deleteStudent/:schoolId",
  authToken,
  adminController.deleteStudent
);

module.exports = router;
