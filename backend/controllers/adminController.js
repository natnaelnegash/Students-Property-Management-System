const { PrismaClient } = require("../generated/prisma");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { uploadImage } = require("../services/cloudinary");
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

const getAllProperties = asyncHandler(async (req, res) => {
  const properties = await prisma.properties.findMany();
  if (!properties) res.status(404).json({ message: "No properties found" });
  res.status(200).json(properties);
});

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

const createProperty = asyncHandler(async (req, res) => {
  const { type, title, description, serialNumber, studId } = req.body;
  const imagePath = req.file.path;
  const student = await prisma.Students.findUnique({
    where: {
      schoolId: studId,
    },
  });
  if (!student) return res.status(404).json({ message: "Student not found" });
  const admin = await prisma.Admins.findUnique({
    where: {
      adminId: req.user.adminId,
    },
  });
  if (!admin) return res.status(404).json({ message: "Admin not found" });
  const uploadedImage = await uploadImage(imagePath);
  const property = await prisma.Properties.create({
    data: {
      type: type,
      title: title,
      description: description,
      serialNumber: serialNumber,
      imageUrl: uploadedImage,
      studId: student.id,
      approvedBy: admin.id,
    },
  });
  console.log(req.file);
  res.status(200).json(property);
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
  getAllProperties,
  createStudent,
  createProperty,
  updateStudent,
  deleteStudent,
};
