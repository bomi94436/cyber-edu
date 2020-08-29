import React from "react";
import RegisterInput from "./RegisterInput";
import RegisterRadio from "./RegisterRadio";

const RegisterPage = ({ stateReigster, setRegister, postRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister(stateReigster);
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
          type="text"
          placeholder="202012345 ..."
          dispatchName="studentId"
          setRegister={setRegister}
        />
        <RegisterInput
          title="비밀번호"
          type="password"
          placeholder="password ..."
          dispatchName="password"
          setRegister={setRegister}
        />
        <RegisterInput
          title="이름"
          type="text"
          placeholder="홍길동 ..."
          dispatchName="name"
          setRegister={setRegister}
        />
        <RegisterInput
          title="이메일"
          type="email"
          placeholder="test@example.com ..."
          dispatchName="email"
          setRegister={setRegister}
        />
        <RegisterInput
          title="휴대폰 번호"
          type="text"
          placeholder="01012345678 ..."
          dispatchName="phone"
          setRegister={setRegister}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
