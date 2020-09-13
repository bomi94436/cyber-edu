import React from "react";
import RegisterInput from "./RegisterInput";
import RegisterRadio from "./RegisterRadio";
import "./RegisterPage.css";
import { isEveryFieldValid } from "../../../utils/validations";

const RegisterPage = ({ history, state, setRegister, postRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister(state.value).then((res) => {
      alert(res.message);
      if (res.isSuccess) history.push("/");
    });
  };

  return (
    <div className="register">
      <form onSubmit={(e) => handleSubmit(e)} className="form-frame">
        <RegisterRadio
          title="학생"
          name="role"
          value="student"
          setRegister={setRegister}
        />
        <RegisterRadio
          title="교수"
          name="role"
          value="professor"
          setRegister={setRegister}
        />
        <RegisterInput
          title="학번(직번)"
          type="text"
          valid={state.valid.studentId}
          value={state.value.studentId}
          placeholder="202012345"
          dispatchName="studentId"
          setRegister={setRegister}
        />
        <RegisterInput
          title="비밀번호"
          type="password"
          valid={state.valid.password}
          value={state.value.password}
          placeholder="**********"
          dispatchName="password"
          setRegister={setRegister}
        />
        <RegisterInput
          title="비밀번호 확인"
          type="password"
          valid={state.valid.re_password}
          value={state.value.re_password}
          placeholder="**********"
          dispatchName="re_password"
          setRegister={setRegister}
        />
        <RegisterInput
          title="이름"
          type="text"
          valid={state.valid.name}
          value={state.value.name}
          placeholder="홍길동"
          dispatchName="name"
          setRegister={setRegister}
        />
        <RegisterInput
          title="이메일"
          type="email"
          valid={state.valid.email}
          value={state.value.email}
          placeholder="test@example.com"
          dispatchName="email"
          setRegister={setRegister}
        />
        <RegisterInput
          title="휴대폰 번호"
          type="text"
          valid={state.valid.phone}
          value={state.value.phone}
          placeholder="010-1234-5678"
          dispatchName="phone"
          setRegister={setRegister}
        />
        {isEveryFieldValid(state.valid) ? (
          <button type="submit" className="btn btn-primary btn-block">
            회원가입
          </button>
        ) : (
          <button type="submit" className="btn btn-primary btn-block" disabled>
            회원가입
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
