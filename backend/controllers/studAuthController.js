require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

exports.authenticateStudent = asyncHandler(async (req, res) => {
  const { schoolId, password } = req.body;
  const student = await prisma.students.findUnique({
    where: {
      schoolId: schoolId,
    },
  });
  if (!student) res.status(400).json({ message: "Profile not found" });
  // const isMatch = await bcrypt.compare(password, student.password);
  const isMatch = password === student.password;
  if (!isMatch) res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { schoolId: student.schoolId },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24h" }
  );
  res.json({ token });
});
