import {AUTH_TYPES} from './types';
import {store} from '../store';
import {setLoginRoot} from '../../../index';

export const loginRequest = data => ({
  type: AUTH_TYPES.LOGIN_REQUEST,
  payload: data,
});

export const loginFailure = err => ({
  type: AUTH_TYPES.LOGIN_FAILURE,
  payload: err,
});

export const loginSuccess = status => ({
  type: AUTH_TYPES.LOGIN_SUCCESS,
  payload: status,
});

export const logout = () => {
  setLoginRoot();
  return {
    type: AUTH_TYPES.LOGOUT,
  };
};

export const signUpRequest = data => ({
  type: AUTH_TYPES.SIGNUP_REQUEST,
  payload: data,
});

export const signUpSuccess = status => ({
  type: AUTH_TYPES.SIGNUP_SUCCESS,
  payload: status,
});

export const signUpFailure = err => ({
  type: AUTH_TYPES.SIGNUP_FAILURE,
  payload: err,
});

export const forgetPasswordRequest = email => ({
  type: AUTH_TYPES.FORGET_PASSWORD_REQUEST,
  payload: email,
});

export const forgetPasswordSuccess = status => ({
  type: AUTH_TYPES.FORGET_PASSWORD_SUCCESS,
  payload: status,
});

export const forgetPasswordFailure = err => ({
  type: AUTH_TYPES.FORGET_PASSWORD_FAILURE,
  payload: err,
});
