const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { authToken } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

router.get(
  "/getMyProperties",
  authToken,
  authorizeRoles("student"),
  studentController.getMyProperties
);
router.put(
  "/updateMyProfile",
  authToken,
  authorizeRoles("student"),
  studentController.updateMyProfile
);

module.exports = router;
