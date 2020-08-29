import React from "react";
import nock from "nock";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import RegisterPageContainer from "./RegisterPageContainer";
import store from "../../modules/store";
import * as data from "../../utils/sampleData";

describe("RegisterPageContainer", () => {
  let component = null;

  it("renders properly", () => {
    component = mount(
      <Provider store={store}>
        <RegisterPageContainer />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("dispatches SET_REGISTER action", () => {
    const value = data.register[1].value;
    const mockedEvent = {
      target: { value: value },
    };
    component.find("#studentId-input").simulate("change", mockedEvent);
    expect(store.getState().register.studentId).toBe(value);
  });

  it("fetches and updates using postRegister", async () => {
    const dataToSubmit = {};
    data.register.forEach((element) => {
      if (element.name === "studentId" || element.name === "phone") {
        dataToSubmit[`${element.name}`] = Number(element.value);
      } else {
        dataToSubmit[`${element.name}`] = element.value;
      }
    });
    nock("http://localhost")
      .post("/api/auth/register", dataToSubmit)
      .once()
      .reply(200, {
        message: "회원가입 완료",
      });
    component.find("form").simulate("submit");

    const waitForNextAction = new Promise((resolve) => {
      const unsubscribe = store.subscribe(() => {
        resolve();
        unsubscribe();
      });
    });
    await waitForNextAction;
    expect(component.find("#studentId-input").props().value).toBe(undefined);
  });
});
