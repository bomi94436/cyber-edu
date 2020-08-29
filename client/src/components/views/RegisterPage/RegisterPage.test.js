import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import * as data from "../../../utils/sampleData";

describe("<RegisterPage />", () => {
  const mockChange = jest.fn();
  const mockSubmit = jest.fn();

  const setup = () => {
    const component = render(
      <RegisterPage setRegister={mockChange} postRegister={mockSubmit} />
    );
    return component;
  };

  it("renders correctly", () => {
    const component = setup();
  });

  it("matches snapshot", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it("has labels, inputs and button", () => {
    const component = setup();

    data.register.forEach((element) => {
      component.getByText(element.title);
      component.getByLabelText(element.title);
    });
    component.getByText("회원가입");
  });

  it("calls onChange", () => {
    const component = setup();

    data.register.forEach((element) => {
      const input = component.getByLabelText(element.title);
      const value = element.value;
      const mockedEvent = {
        target: {
          value: element.value,
        },
      };
      fireEvent.change(input, mockedEvent);
      expect(input.value).toBe(value);
    });
  });

  it("calls onSubmit", () => {
    const component = setup();
    fireEvent.submit(component.getByText("회원가입"));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
