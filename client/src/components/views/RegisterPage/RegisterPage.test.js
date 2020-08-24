import React from "react";
import { render } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("<RegisterPage />", () => {
  it("has span, inputs and button", () => {
    const utils = render(<RegisterPage />);
    [
      "학생",
      "교수",
      "학번(직번)",
      "비밀번호",
      "이름",
      "이메일",
      "휴대폰 번호",
      "회원가입",
    ].forEach((element) => {
      utils.getByText(element);
    });
  });
});
