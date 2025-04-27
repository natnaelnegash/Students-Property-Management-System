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
  const token = jwt.sign({ adminId: adminId }, config.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
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
  const token = jwt.sign({ adminId: adminId }, config.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = { authenticateAdmin, signupAdmin };
