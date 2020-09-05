import { createStore, applyMiddleware } from "redux";
import reduceReducers from "reduce-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import initState from "./initState";
import main from "./main";
import user from "./user";

const reducer = reduceReducers(initState, main, user);

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
