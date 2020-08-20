import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "./initState";
import * as api from "../utils/api";

// action type definition
const SET_MODE = "main/SET_MODE";
const SET_LOGIN = "main/SET_LOGIN";

const USER_LOGIN = "main/USER_LOGIN";
const USER_LOGIN_SUCCESS = "main/USER_LOGIN_SUCCESS";
const USER_LOGIN_FAILURE = "main/USER_LOGIN_FAILURE";

const USER_REGISTER = "main/USER_REGISTER";
const USER_REGISTER_SUCCESS = "main/USER_REGISTER_SUCCESS";
const USER_REGISTER_FAILURE = "main/USER_REGISTER_FAILURE";

// action generator definition
export const setMode = createAction(SET_MODE, (data) => data);
export const setLogin = createAction(SET_LOGIN, (data) => data);

export const userLogin = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });
  try {
    const response = await api.login(dataToSubmit);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (e) {
    alert("error");
    dispatch({ type: USER_LOGIN_FAILURE, payload: e, error: true });
  }
};

export const userRegister = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });
  try {
    const response = await api.register(dataToSubmit);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (e) {
    alert("error");
    dispatch({ type: USER_REGISTER_FAILURE, payload: e, error: true });
  }
};

// reducer
const main = handleActions(
  {
    [SET_LOGIN]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.login[name] = value;
      });
    },

    [USER_LOGIN]: (state) => {},

    [USER_REGISTER]: (state) =>
      produce(state, (draft) => {
        draft.loading.USER_REGISTER = true;
      }),
    [USER_REGISTER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.USER_REGISTER = false;
      }),
    [USER_REGISTER_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.USER_REGISTER = false;
      }),
  },
  initState
);

export default main;
