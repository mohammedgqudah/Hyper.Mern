import Axios from '../../axios/axios.base';
import { isEmail } from 'validator';
import {
  REMOVE_LOGIN_ERROR,
  SET_LOGIN_ERROR,
  SET_USER,
  REMOVE_SIGNUP_ERROR,
  SET_SIGNUP_ERROR,
  START_LOGOUT
} from './constants';

export const LOGIN = (_data, success) => {
  return async dispatch => {
    dispatch({ type: REMOVE_LOGIN_ERROR });
    // TODO: use imports/schemas
    let errors = {};
    if (_data.id.trim() == '') errors.email = "email_can't_be_empty";
    if (_data.password.trim() == '')
      errors.password = "password_can't_be_empty";
    if (Object.keys(errors).length > 0)
      dispatch({
        type: SET_LOGIN_ERROR,
        payload: { ...errors }
      });
    else {
      try {
        let { data } = await Axios.post('/auth/login', _data);
        success();
        dispatch({ type: SET_USER, payload: data });
      } catch (error) {
        console.log('action:login failed', error);
        switch (error.response.status) {
          case 400: {
            // user not found
            dispatch({
              type: SET_LOGIN_ERROR,
              payload: {
                main: 'user_not_found'
              }
            });
            break;
          }
          default: {
            dispatch({
              type: SET_LOGIN_ERROR,
              payload: {
                main: 'something_went_wrong'
              }
            });
            break;
          }
        }
      }
    }
  };
};
export const SIGNUP = (_data, success) => {
  console.log('----------------------------------------');
  return async dispatch => {
    dispatch({ type: REMOVE_SIGNUP_ERROR });
    let errors = {};
    if (!isEmail(_data.email)) errors.email = 'enter_a_valid_email';
    if (_data.email.trim() == '') errors.email = "email_can't_be_empty";
    if (_data.password.trim() == '')
      errors.password = "password_can't_be_empty";
    if (_data.name.trim() == '') errors.name = "name_can't_be_empty";
    if (Object.keys(errors).length > 0)
      dispatch({
        type: SET_SIGNUP_ERROR,
        payload: { ...errors }
      });
    else {
      try {
        let { data } = await Axios.post('/auth/signup', _data);
        console.log('success:response', data);
        success();
        dispatch({
          type: SET_USER,
          payload: data
        });
      } catch (error) {
        console.log('error', error);
        console.log('error:response', error.response);
        switch (error.response.status) {
          case 409: {
            let duplicated = error.response.data.errors[0];
            return dispatch({
              type: SET_SIGNUP_ERROR,
              payload: {
                [duplicated]: `already_in_use`
              }
            });
            break;
          }
          case 422: {
            // validation error
            console.log(error.response.data);
            break;
          }
          default: {
            dispatch({
              type: SET_SIGNUP_ERROR,
              payload: {
                main: 'something_went_wrong'
              }
            });
            break;
          }
        }
      }
    }
  };
};

export const LOGOUT = () => {
  return async dispatch => {
    dispatch({ type: START_LOGOUT });
  };
};
