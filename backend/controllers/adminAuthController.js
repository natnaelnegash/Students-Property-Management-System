const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const config = require("../config/index");

const authenticateAdmin = asyncHandler(async (req, res) => {
  const { adminId, password } = req.body;
  const admin = await prisma.admins.findUnique({
    where: {
      adminId: adminId,
    },
  });
  if (!admin) res.status(404).json({ message: "Profile not found" });
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) res.status(404).json({ message: "Invalid credentials" });
  const accessToken = jwt.sign(
    { adminId: adminId, role: "admin" },
    config.JWT_SECRET_ACCESS,
    {
      expiresIn: config.ACCESS_TOKEN_EXPIRY,
    }
  );
  const refreshToken = jwt.sign(
    { adminId: admin.adminId, role: "admin" },
    config.JWT_SECRET_REFRESH,
    { expiresIn: config.REFRESH_TOKEN_EXPIRY }
  );
  res.json({ "Access Token": accessToken, "Refresh Token": refreshToken });
});

const signupAdmin = asyncHandler(async (req, res) => {
  const { adminId, fullName, email, password, phone, role, location } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await prisma.Admins.create({
    data: {
      adminId: adminId,
      fullName: fullName,
      email: email,
      password: hashedPassword,
      phone: phone,
      role: role,
      location: location,
    },
  });
  if (!admin) res.status(400).json({ message: "Profile couldn't be created" });
  const accessToken = jwt.sign(
    { adminId: adminId, role: "admin" },
    config.JWT_SECRET_ACCESS,
    {
      expiresIn: config.ACCESS_TOKEN_EXPIRY,
    }
  );
  const refreshToken = jwt.sign(
    { adminId: admin.adminId, role: "admin" },
    config.JWT_SECRET_REFRESH,
    { expiresIn: config.REFRESH_TOKEN_EXPIRY }
  );
  res.json({ "Access Token": accessToken, "Refresh Token": refreshToken });
});

module.exports = { authenticateAdmin, signupAdmin };
