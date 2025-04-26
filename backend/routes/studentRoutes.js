const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { authToken } = require("../middlewares/authMiddleware");

router.get("/", authToken, studentController.getAllStudents);
router.get("/:schoolId", authToken, studentController.getStudent);
router.post("/", authToken, studentController.createStudent);
router.put("/:schoolId", authToken, studentController.updateStudent);
router.delete("/:schoolId", authToken, studentController.deleteStudent);

module.exports = router;
