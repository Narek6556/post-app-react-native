import {POSTS_TYPES} from './types';

export const getPostsRequest = () => ({
  type: POSTS_TYPES.GET_POSTS_REQUEST,
});

export const getPostsSuccess = data => ({
  type: POSTS_TYPES.GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostsFailure = err => ({
  type: POSTS_TYPES.GET_POSTS_FAILURE,
  payload: err,
});

export const addNewPostRequest = data => ({
  type: POSTS_TYPES.ADD_NEW_POST_REQUEST,
  payload: data,
});

export const addNewPostSuccess = data => ({
  type: POSTS_TYPES.ADD_NEW_POST_SUCCESS,
  payload: data,
});

export const addNewPostFailure = err => ({
  type: POSTS_TYPES.ADD_NEW_POST_FAILURE,
  payload: err,
});

export const deletePostRequest = id => ({
  type: POSTS_TYPES.DELETE_POST_REQUEST,
  payload: id,
});

export const deletePostSuccess = () => ({
  type: POSTS_TYPES.DELETE_POST_SUCCESS,
});

export const deletePostFailure = () => ({
  type: POSTS_TYPES.DELETE_POST_FAILURE,
});

export const getPostRequest = id => ({
  type: POSTS_TYPES.GET_POST_REQUEST,
  payload: id,
});

export const getPostSuccess = data => ({
  type: POSTS_TYPES.GET_POST_SUCCESS,
  payload: data,
});

export const getPostFailure = err => ({
  type: POSTS_TYPES.GET_POST_FAILURE,
  payload: err,
});

export const editPostRequest = (id, data) => ({
  type: POSTS_TYPES.EDIT_POST_REQUEST,
  payload: {id, data},
});

export const editPostSuccess = data => ({
  type: POSTS_TYPES.EDIT_POST_SUCCESS,
  payload: data,
});

export const editPostFailure = err => ({
  type: POSTS_TYPES.EDIT_POST_FAILURE,
  payload: err,
});
