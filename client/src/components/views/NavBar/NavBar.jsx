import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName="active">
        홈으로
      </NavLink>
      <NavLink to="/lecture" activeClassName="active">
        강의
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        로그인
      </NavLink>
      <NavLink to="/register" activeClassName="active">
        회원가입
      </NavLink>
    </div>
  );
};

export default NavBar;
