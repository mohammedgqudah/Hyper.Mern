import {
  START_LOGOUT,
  SET_USER,
  REMOVE_LOGIN_ERROR,
  SET_SIGNUP_ERROR,
  SET_LOGIN_ERROR
} from "../actions/constants";

export default (state, { payload, type }) => {
  switch (type) {
    case START_LOGOUT: {
      localStorage.removeItem("USER");
      localStorage.removeItem("USER_TOKEN");
      return {
        ...state,
        user: undefined,
        auth: { logged_in: false, signup: {}, login: {} }
      };
      break;
    }
    case SET_USER: {
      let { token, user } = payload;
      console.log(user);
      localStorage.setItem("USER", JSON.stringify(user));
      localStorage.setItem("USER_TOKEN", JSON.stringify(token));
      return {
        ...state,
        user: { token, ...user },
        auth: {
          ...state.auth,
          logged_in: true,
          login: { logging_in: false, logged_in: true },
          signup: { signing_up: false, logged_in: true }
        }
      };
      break;
    }
    case REMOVE_LOGIN_ERROR: {
      return { ...state, auth: { ...state.auth, login: { logging_in: true } } };
      break;
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        auth: { ...state.auth, login: { ...payload, logging_in: false } }
      };
      break;
    }
    case SET_SIGNUP_ERROR: {
      return {
        ...state,
        auth: { ...state.auth, signup: { ...payload, signing_up: false } }
      };
      break;
    }
    default:
      return { ...state };
      break;
  }
};
