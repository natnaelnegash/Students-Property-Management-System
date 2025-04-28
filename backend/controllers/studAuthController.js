const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const config = require("../config/index");

const authenticateStudent = asyncHandler(async (req, res) => {
  const { schoolId, password } = req.body;
  const student = await prisma.students.findUnique({
    where: {
      schoolId: schoolId,
    },
  });
  if (!student) res.status(400).json({ message: "Profile not found" });
  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) res.status(400).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign(
    { schoolId: student.schoolId, role: "student" },
    config.JWT_SECRET_ACCESS,
    {
      expiresIn: config.ACCESS_TOKEN_EXPIRY,
    }
  );
  const refreshToken = jwt.sign(
    { schoolId: student.schoolId, role: "student" },
    config.JWT_SECRET_REFRESH,
    { expiresIn: config.REFRESH_TOKEN_EXPIRY }
  );
  res.json({ "Access Token": accessToken, "Refresh Token": refreshToken });
});

module.exports = { authenticateStudent };
