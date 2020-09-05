import React from "react";
import { connect } from "react-redux";
import { setLogin, postLogin } from "../../../modules/user";

const LoginPage = ({ studentId, password, setLogin, postLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSubmit = {
      studentId: studentId,
      password: password,
    };
    postLogin(dataToSubmit);
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
    postLogin: (data) => dispatch(postLogin(data)),
  })
)(LoginPage);
