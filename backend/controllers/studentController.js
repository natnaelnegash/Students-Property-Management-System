const { PrismaClient } = require("../generated/prisma");
const asyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const getMyProperties = asyncHandler(async (req, res) => {
  const student = await prisma.Students.findUnique({
    where: {
      schoolId: req.user.schoolId,
    },
  });
  if (!student) res.status(500).json({ message: "Something went wrong" });

  const properties = await prisma.properties.findMany({
    where: {
      studId: student.id,
    },
  });
  res.status(200).json(properties);
});

const updateMyProfile = asyncHandler(async (req, res) => {
  const { email, phone, location } = req.body;
  const student = await prisma.Students.update({
    where: {
      schoolId: req.user.schoolId,
    },
    data: {
      email: email,
      phone: phone,
      location: location,
    },
  });
  if (!student)
    res.status(400).json({ message: "Profile coundn't be updated" });
  res.status(200).json(student);
});

module.exports = { getMyProperties, updateMyProfile };
