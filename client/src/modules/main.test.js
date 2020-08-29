import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import nock from "nock";

import main, * as mainActions from "./main";
import initState from "./initState";
import * as data from "../utils/sampleData";
import store from "./store";

describe("main", () => {
  const dataToSubmit = {};
  data.register.forEach((element) => {
    if (element.name === "studentId" || element.name === "phone") {
      dataToSubmit[`${element.name}`] = Number(element.value);
    } else {
      dataToSubmit[`${element.name}`] = element.value;
    }
  });

  describe("actions", () => {
    const actions = [
      mainActions.setRegister({ name: "studentId", value: 207195076 }),
    ];
    it("should create actions", () => {
      expect(actions).toMatchSnapshot();
    });
  });

  describe("async action", () => {
    const store = configureMockStore([thunk])();

    it("postRegister dispatches proper action", async () => {
      nock("http://localhost")
        .post("/api/auth/register", dataToSubmit)
        .once()
        .reply(200, {
          message: "회원가입 완료",
        });

      await store.dispatch(mainActions.postRegister(dataToSubmit));
      expect(store.getActions()[0]).toHaveProperty(
        "type",
        "main/POST_REGISTER"
      );
      expect(store.getActions()[1]).toHaveProperty(
        "type",
        "main/POST_REGISTER_SUCCESS"
      );
      expect(store.getActions()).toMatchSnapshot();
    });

    it("fails", async () => {
      store.clearActions();
      nock("http://localhost").post("/api/auth/register", {}).once().reply(400);
      try {
        await store.dispatch(mainActions.postRegister({}));
      } catch (e) {}
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("reducer", () => {
    let state = main(undefined, {});

    it("should return the initialState", () => {
      expect(state).toEqual(initState);
    });

    it("should change inputs", () => {
      data.register.forEach((element) => {
        const name = element.name;
        const value = element.value;

        state = main(
          state,
          mainActions.setRegister({
            name: name,
            value: value,
          })
        );
        expect(state.register).toHaveProperty(name, value);
      });
    });

    it("should process postRegister", async () => {
      nock("http://localhost")
        .post("/api/auth/register", dataToSubmit)
        .once()
        .reply(200, {
          message: "회원가입 완료",
        });
      await store.dispatch(mainActions.postRegister(dataToSubmit));
      expect(store.getState().register.studentId).toBe(null);
    });
  });
});
