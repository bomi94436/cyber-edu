import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";
import { validate } from "../../utils/checkValidation";

// action type definition
const SET_LOGIN = "user/SET_LOGIN";
const SET_REGISTER = "user/SET_REGISTER";

const POST_LOGIN = "user/POST_LOGIN";
const POST_LOGIN_SUCCESS = "user/POST_LOGIN_SUCCESS";
const POST_LOGIN_FAILURE = "user/POST_LOGIN_FAILURE";

const POST_REGISTER = "user/POST_REGISTER";
const POST_REGISTER_SUCCESS = "user/POST_REGISTER_SUCCESS";
const POST_REGISTER_FAILURE = "user/POST_REGISTER_FAILURE";

// action generator definition
export const setLogin = createAction(SET_LOGIN, (data) => data);
export const setRegister = createAction(SET_REGISTER, (data) => data);

export const postLogin = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: POST_LOGIN });
  try {
    const response = await api.login(dataToSubmit);
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (e) {
    dispatch({ type: POST_LOGIN_FAILURE, payload: e, error: true });
  }
};

export const postRegister = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  try {
    const response = await api.register(dataToSubmit);
    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: {
        response,
      },
    });
    return response.data.message;
  } catch (e) {
    dispatch({ type: POST_REGISTER_FAILURE, payload: e, error: true });
    // return "회원가입에 실패햐였습니다.";
  }
};

// reducer
const user = handleActions(
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
        if (name === "re_password") {
          console.log("re");
          draft.register.valid[name] = validate(
            name,
            value,
            draft.register.value.password
          );
        } else {
          draft.register.valid[name] = validate(name, value);
        }
      });
    },

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

export default user;
