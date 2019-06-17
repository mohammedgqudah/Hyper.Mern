import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reduceReducers from "reduce-reducers";

import baseReducer from "./reducers/base.reducer";
import authReducer from "./reducers/auth.reducer";

import io from "socket.io-client";
window.io = io;
const socket = io("http://localhost:3000");
window.socket = socket;
export default () => {
  const reducers = reduceReducers(baseReducer, authReducer);
  const devTool =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const storedUser = localStorage.getItem("USER");
  const store = createStore(
    reducers,
    {
      user: JSON.parse(storedUser) || undefined,
      auth: { login: {}, signup: {}, logged_in: !!storedUser }
    },
    compose(
      applyMiddleware(thunk, logger),
      devTool
    )
  );
  return store;
};
