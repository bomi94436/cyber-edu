import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import RegisterPage from "./RegisterPage";
import * as data from "../../../../../utils/sampleData";
import state from "../../../modules/initState";

describe("<RegisterPage />", () => {
  let promise = Promise.resolve("response");
  const mockChange = jest.fn();
  const mockSubmit = jest.fn(() => promise);
  const history = createMemoryHistory();

  const setup = () => {
    let register = state.register;
    const component = render(
      <RegisterPage
        history={history}
        state={register}
        setRegister={mockChange}
        postRegister={mockSubmit}
      />
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
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
