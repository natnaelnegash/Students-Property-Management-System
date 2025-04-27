const { PrismaClient } = require("../generated/prisma");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const getAllStudents = asyncHandler(async (req, res) => {
  const students = await prisma.Students.findMany();
  res.status(200).json(students);
});

const getStudent = asyncHandler(async (req, res) => {
  const { schoolId } = req.params;
  console.log(schoolId);

  const student = await prisma.Students.findUnique({
    where: {
      schoolId: schoolId,
    },
  });
  res.status(200).json(student);
});

// const createStudent = asyncHandler(async (req, res) => {
//   const {
//     schoolId,
//     fullName,
//     email,
//     password,
//     year,
//     phone,
//     location,
//     department,
//   } = req.body;
//   const student = await prisma.Students.create({
//     data: {
//       schoolId: schoolId,
//       fullName: fullName,
//       email: email,
//       password: password,
//       year: year,
//       phone: phone,
//       location: location,
//       department: department,
//     },
//   });
//   res.status(200).json(student);
// });

const createStudent = asyncHandler(async (req, res) => {
  const {
    schoolId,
    fullName,
    email,
    password,
    year,
    phone,
    location,
    department,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const student = await prisma.Students.create({
    data: {
      schoolId: schoolId,
      fullName: fullName,
      email: email,
      password: hashedPassword,
      phone: phone,
      year: year,
      location: location,
      department: department,
    },
  });
  if (!student)
    res.status(400).json({ message: "Profile couldn't be created" });
  res.status(200).json(student);
});

const updateStudent = asyncHandler(async (req, res) => {
  const schoolId = req.params;
  const { fullName, email, password, year, phone, location, department } =
    req.body;
  const student = await prisma.Students.update({
    where: {
      schoolId: schoolId.toString(),
    },
    data: {
      fullName: fullName,
      email: email,
      password: password,
      year: year,
      phone: phone,
      location: location,
      department: department,
    },
  });
  res.status(200).json(student);
});

const deleteStudent = asyncHandler(async (req, res) => {
  const schoolId = req.params;
  const student = await prisma.Students.delete({
    where: {
      schoolId: schoolId.toString(),
    },
  });
  res.status(200).json(student);
});

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
