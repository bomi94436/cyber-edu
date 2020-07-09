import { createStore, applyMiddleware } from "redux";
import reduceReducers from "reduce-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import initState from "./initState";
import main from "./main";

const reducer = reduceReducers(initState, main);

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
