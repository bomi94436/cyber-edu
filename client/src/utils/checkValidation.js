import * as data from "./sampleData";

const studentIdRegExp = /^\d+$/; // 숫자만 입력
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 영어, 숫자 조합해서 8자리 이상 입력
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

export const validate = (target, value, password) => {
  switch (target) {
    case "role":
      if (value) return true;
      else return false;

    case "studentId":
      if (value.length === 9 && value.match(studentIdRegExp)) return true;
      else return false;

    case "password":
      if (
        value.length >= 8 &&
        value.length <= 20 &&
        value.match(passwordRegExp)
      )
        return true;
      else return false;

    case "re_password":
      if (value === password) return true;
      else return false;

    case "name":
      if (value.length >= 2) return true;
      else return false;

    case "email":
      if (value.match(emailRegExp)) return true;
      else return false;

    case "phone":
      if (value.match(phoneNumberRegExp)) return true;
      else return false;

    default:
      return null;
  }
};

export const inputClassNameByValid = (valid) => {
  switch (valid) {
    case true:
      return "is-valid";

    case false:
      return "is-invalid";

    default:
      return "";
  }
};

export const isEveryFieldValid = (state) => {
  for (const [key, value] of Object.entries(state)) {
    if (!value) return false;
  }
  return true;
};
