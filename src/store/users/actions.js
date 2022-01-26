import {USERS_TYPES} from './types';

export const getUsersRequest = () => ({
  type: USERS_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = data => ({
  type: USERS_TYPES.GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersFailure = err => ({
  type: USERS_TYPES.GET_USERS_FAILURE,
  payload: err,
});

export const getProfileRequest = () => ({
  type: USERS_TYPES.GET_PROFILE_REQUEST,
});

export const getProfileSuccess = data => ({
  type: USERS_TYPES.GET_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileFailure = err => ({
  type: USERS_TYPES.GET_PROFILE_FAILURE,
  payload: err,
});

export const editUserProfileRequest = data => ({
  type: USERS_TYPES.EDIT_USER_PROFILE_REQUEST,
  payload: data,
});

export const editUserProfileSuccess = data => ({
  type: USERS_TYPES.EDIT_USER_PROFILE_REQUEST,
  payload: data,
});

export const editUserProfileFailure = err => ({
  type: USERS_TYPES.EDIT_USER_PROFILE_REQUEST,
  payload: err,
});

export const getUserRequest = id => ({
  type: USERS_TYPES.GET_USER_REQUEST,
  payload: id,
});

export const getUserSuccess = data => ({
  type: USERS_TYPES.GET_USER_SUCCESS,
  payload: data,
});

export const getUserFailure = err => ({
  type: USERS_TYPES.GET_USER_FAILURE,
  payload: err,
});
