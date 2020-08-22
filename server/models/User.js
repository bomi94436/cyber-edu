const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = mongoose.Schema({
  studentId: {
    type: Number,
    maxlength: 9,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  phone: {
    type: String,
    maxlength: 13,
  },
  // 관리자 0, 학생 1, 교수 2
  role: {
    type: Number,
    default: 1,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };