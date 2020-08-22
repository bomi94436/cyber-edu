import React from "react";
import { connect } from "react-redux";
import { setRegister, userRegister } from "../../../modules/main";
import RegisterRow from "./RegisterRow";

const RegisterPage = ({ setRegister, userRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>학생</span>
        <input
          type="radio"
          name="role"
          value="1"
          defaultChecked
          onChange={(event) =>
            setRegister({ name: "role", value: event.target.value })
          }
        />
        <span>교수</span>
        <input
          type="radio"
          name="role"
          value="2"
          onChange={(event) =>
            setRegister({ name: "role", value: event.target.value })
          }
        />
        <RegisterRow
          title="학번(직번)"
          type="text"
          placeholder="202012345 ..."
          dispatchName="studentId"
        />
        <RegisterRow
          title="비밀번호"
          type="password"
          placeholder="password ..."
          dispatchName="password"
        />
        <RegisterRow
          title="이름"
          type="text"
          placeholder="홍길동 ..."
          dispatchName="name"
        />
        <RegisterRow
          title="이메일"
          type="email"
          placeholder="test@example.com ..."
          dispatchName="email"
        />
        <RegisterRow
          title="휴대폰 번호"
          type="text"
          placeholder="01012345678 ..."
          dispatchName="phone"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    userRegister: () => dispatch(userRegister()),
    setRegister: (data) => dispatch(setRegister(data)),
  })
)(RegisterPage);
