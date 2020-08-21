import React from "react";
import { connect } from "react-redux";
import { setRegister, userRegister } from "../../../modules/main";

const RegisterPage = ({ setRegister, userRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>학번</span>
        <input
          type="text"
          placeholder="학번"
          onChange={(event) =>
            setRegister({ name: "studentId", value: event.target.value })
          }
        />
        <br />
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) =>
            setRegister({ name: "password", value: event.target.value })
          }
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    userRegister: () => dispatch(userRegister()),
  })
)(RegisterPage);
