const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const config = require("../config/index");

// function authToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) res.status(401).json({ message: "Token not found" });
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, student) => {
//     if (err) return res.sendStatus(403);
//   });
//   next();
// }

const authToken = asyncHandler((req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) res.status(401).json({ message: "Token not found" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, config.JWT_SECRET_KEY, (err, student) => {
    if (err) return res.sendStatus(403);
  });
  next();
});

module.exports = { authToken };
