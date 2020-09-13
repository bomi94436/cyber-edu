const { body, check, validationResult, oneOf } = require("express-validator");
const db = require("../../config/dbmysql2");
const qurey = require("./validations-query");

/*
    학번(직번)을 입력받아서 학번이 유효한지 확인

    @body {String} studentId 학번(직번)

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "유효하지 않은 학번입니다. 숫자 9자리로 입력해주세요."
        }

    @action success:
        next middleware
*/
exports.isStudentIdValid = async (req, res, next) => {
  await body("studentId").isLength(9).isNumeric().run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message: "유효하지 않은 학번입니다. 숫자 9자리로 입력해주세요.",
    });
    return;
  }
  next();
};

/*
    학번(직번)을 입력받아서 중복되는지 확인(DB 내에 같은 학번(직번)이 존재하는지 확인)

    @body {String} studentId 학번(직번)

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "이미 같은 학번이 존재합니다."
        }

    @action success:
        next middleware
*/
exports.isStudentIdExist = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    let data = await db.query(qurey.selectSutdentId, [studentId]);
    if (data[0].length) {
      res.status(200).json({
        isSuccess: false,
        message: "이미 같은 학번이 존재합니다.",
      });
      return;
    }
    next();
  } catch (error) {
    throw Error(error);
  }
};

/*
    비밀번호, 이름, 이메일, 휴대폰 번호, 역할을 입력받아서 전부 유효한지 확인

    @body {String} password 비밀번호

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "유효하지 않은 비밀번호입니다. 8자리 이상의 숫자, 영어 조합으로 입력해주세요."
        }

    @body {String} name 이름

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "유효하지 이름입니다. 2글자 이상 입력해주세요."
        }

    @body {String} email 이메일

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "유효하지 않은 이메일입니다. 이메일 형식으로 입력해주세요."
        }

    @body {String} phone 휴대폰 번호

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "유효하지 않은 휴대폰 번호입니다. 휴대폰 번호는 하이픈(-)을 포함하여 숫자 11자리를 입력해주세요."
        }

    @body {String} role 역할

    @action failure:
        status 200
        {
            isSuccess: false,
            message: "학생 또는 교수를 선택해주세요."
        }

    @action success:
        next middleware
*/
exports.isInputsAllValid = async (req, res, next) => {
  await body("password")
    .isLength({ min: 8, max: 20 })
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message:
        "유효하지 않은 비밀번호입니다. 8자리 이상의 숫자, 영어 조합으로 입력해주세요.",
    });
    return;
  }

  await body("name").isLength({ min: 2, max: undefined }).run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message: "유효하지 이름입니다. 2글자 이상 입력해주세요.",
    });
    return;
  }

  await body("email")
    .isEmail()
    .withMessage("이메일은 이메일 형식으로 입력해주세요.")
    .run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message: "유효하지 않은 이메일입니다. 이메일 형식으로 입력해주세요.",
    });
    return;
  }

  await body("phone")
    .matches(/^\d{3}-\d{3,4}-\d{4}$/)
    .run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message:
        "유효하지 않은 휴대폰 번호입니다. 휴대폰 번호는 하이픈(-)을 포함하여 숫자 11자리를 입력해주세요.",
    });
    return;
  }

  await body("role").isIn(["student", "professor"]).run(req);
  if (!validationResult(req).isEmpty()) {
    res.status(200).json({
      isSuccess: false,
      message: "학생 또는 교수를 선택해주세요.",
    });
    return;
  }

  next();
};
