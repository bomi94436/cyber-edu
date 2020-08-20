import React from "react";
import { connect } from "react-redux";
import { setLogin, userLogin } from "../../../modules/main";

const LoginPage = ({ studentId, password, setLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSubmit = {
      studentId: studentId,
      password: password,
    };
    userLogin(dataToSubmit);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>학번</span>
        <input
          type="text"
          placeholder="학번"
          onChange={(event) =>
            setLogin({ name: "studentId", value: event.target.value })
          }
        />
        <br />
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) =>
            setLogin({ name: "password", value: event.target.value })
          }
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default connect(
  (state) => ({
    studentId: state.login.studentId,
    password: state.login.password,
  }),
  (dispatch) => ({
    setLogin: (data) => dispatch(setLogin(data)),
    userLogin: (data) => dispatch(userLogin(data)),
  })
)(LoginPage);
