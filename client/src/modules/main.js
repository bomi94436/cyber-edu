import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "./initState";
import * as api from "../utils/api";
import { validate } from "../utils/checkValidation";

// action type definition
const SET_MODE = "main/SET_MODE";
const SET_LOGIN = "main/SET_LOGIN";
const SET_REGISTER = "main/SET_REGISTER";

const USER_LOGIN = "main/USER_LOGIN";
const USER_LOGIN_SUCCESS = "main/USER_LOGIN_SUCCESS";
const USER_LOGIN_FAILURE = "main/USER_LOGIN_FAILURE";

const POST_REGISTER = "main/POST_REGISTER";
const POST_REGISTER_SUCCESS = "main/POST_REGISTER_SUCCESS";
const POST_REGISTER_FAILURE = "main/POST_REGISTER_FAILURE";

// action generator definition
export const setMode = createAction(SET_MODE, (data) => data);
export const setLogin = createAction(SET_LOGIN, (data) => data);
export const setRegister = createAction(SET_REGISTER, (data) => data);

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

export const postRegister = (state) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  try {
    const response = await api.register(state);
    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: {
        response,
      },
    });
    return response.data.message;
  } catch (e) {
    console.log(e);
    dispatch({ type: POST_REGISTER_FAILURE, payload: e, error: true });
    return "회원가입에 실패햐였습니다.";
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

    [SET_REGISTER]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.register.value[name] = value;
        draft.register.valid[name] = validate(name, value);
      });
    },

    [USER_LOGIN]: (state) => {},

    [POST_REGISTER]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = true;
      }),
    [POST_REGISTER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = false;
        // 초기화
        draft.register.valid = initState.register.valid;
        draft.register.value = initState.register.value;
      }),
    [POST_REGISTER_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = false;
      }),
  },
  initState
);

export default main;
