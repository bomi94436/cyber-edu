import React from "react";
import RegisterInput from "./RegisterInput";
import RegisterRadio from "./RegisterRadio";

const RegisterPage = ({ state, setRegister, postRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister(state);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <RegisterRadio
          title="학생"
          name="role"
          value="student"
          checked
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
          type="number"
          placeholder="202012345 ..."
          dispatchName="studentId"
          value={state.studentId}
          setRegister={setRegister}
        />
        <RegisterInput
          title="비밀번호"
          type="password"
          placeholder="password ..."
          dispatchName="password"
          value={state.password}
          setRegister={setRegister}
        />
        <RegisterInput
          title="이름"
          type="text"
          placeholder="홍길동 ..."
          dispatchName="name"
          value={state.name}
          setRegister={setRegister}
        />
        <RegisterInput
          title="이메일"
          type="email"
          placeholder="test@example.com ..."
          dispatchName="email"
          value={state.email}
          setRegister={setRegister}
        />
        <RegisterInput
          title="휴대폰 번호"
          type="number"
          placeholder="01012345678 ..."
          dispatchName="phone"
          value={state.phone}
          setRegister={setRegister}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
