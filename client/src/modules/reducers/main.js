import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";

// action type definition
const SET_MODE = "main/SET_MODE";

// action generator definition
export const setMode = createAction(SET_MODE, (data) => data);

// reducer
const main = handleActions({}, initState);

export default main;
