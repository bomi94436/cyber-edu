import React from "react";
import { connect } from "react-redux";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        {/* 비밀번호 확인 */}
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) =>
            setLogin({ name: "password", value: event.target.value })
          }
        />
        <br />
        <span>이름</span>
        <input
          type="text"
          placeholder="이름"
          onChange={(event) =>
            setLogin({ name: "name", value: event.target.value })
          }
        />
        <span>이메일</span>
        <input
          type="email"
          placeholder="이메일"
          onChange={(event) =>
            setLogin({ name: "email", value: event.target.value })
          }
        />
        <span>전화번호</span>
        <input
          type="text"
          placeholder="전화번호"
          onChange={(event) =>
            setLogin({ name: "phone", value: event.target.value })
          }
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(RegisterPage);
