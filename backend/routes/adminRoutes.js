const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/multer");
const adminController = require("../controllers/adminController");
const { authToken } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

router.get(
  "/getAllStudents",
  authToken,
  authorizeRoles("admin"),
  adminController.getAllStudents
);
router.get(
  "/getStudent/:schoolId",
  authToken,
  authorizeRoles("admin"),
  adminController.getStudent
);
router.get(
  "/getAllProperties",
  authToken,
  authorizeRoles("admin"),
  adminController.getAllProperties
);
router.post(
  "/createStudent",
  authToken,
  authorizeRoles("admin"),
  adminController.createStudent
);
router.post(
  "/createProperty",
  authToken,
  authorizeRoles("admin"),
  upload.single("image"),
  adminController.createProperty
);
router.put(
  "/updateStudent/:schoolId",
  authToken,
  authorizeRoles("admin"),
  adminController.updateStudent
);
router.delete(
  "/deleteStudent/:schoolId",
  authToken,
  authorizeRoles("admin"),
  adminController.deleteStudent
);

module.exports = router;
