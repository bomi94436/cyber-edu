const router = require("express").Router();
const controller = require("./auth-controller");
const {
  isStudentIdValid,
  isStudentIdExist,
  isInputsAllValid,
} = require("../../../middleware/auth/validations");

router.post(
  "/register",
  isStudentIdValid,
  isStudentIdExist,
  isInputsAllValid,
  controller.register
);

module.exports = router;
