const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
