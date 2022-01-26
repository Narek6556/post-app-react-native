import {put, takeLatest, call} from 'redux-saga/effects';

import {
  addNewPostRequest,
  getPostsRequest,
  deletePostRequest,
  editPostRequest,
  getPostRequest,
} from '../../utils/api/posts.api';
import {
  addNewPostFailure,
  addNewPostSuccess,
  getPostsFailure,
  getPostsSuccess,
  deletePostSuccess,
  deletePostFailure,
  editPostSuccess,
  editPostFailure,
  getPostFailure,
  getPostSuccess,
} from '../posts/actions';
import {POSTS_TYPES} from '../posts/types';

function* getPostsSaga(action) {
  try {
    const res = yield call(getPostsRequest, action.payload);
    yield put(getPostsSuccess(res.data.results));
    console.log('SUCCESS');
  } catch (err) {
    yield put(getPostsFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* addNewPostSaga(action) {
  try {
    const res = yield call(addNewPostRequest, action.payload);
    yield put(addNewPostSuccess(res));
    console.log('SUCCESS while adding new post');
  } catch (err) {
    yield put(addNewPostFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* deletePostSaga(action) {
  console.log(action);
  try {
    const res = yield call(deletePostRequest, action.payload);
    yield put(deletePostSuccess(res));
    console.log('SUCCESS while deleting post');
  } catch (err) {
    yield put(deletePostFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* editPostSaga(action) {
  try {
    const res = yield call(
      editPostRequest,
      action.payload.id,
      action.payload.data,
    );
    yield put(editPostSuccess(res));
    console.log('SUCCESS while adding new post');
  } catch (err) {
    yield put(editPostFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* getPostSaga(action) {
  try {
    const res = yield call(getPostRequest, action.payload);
    yield put(getPostSuccess(res.data));
  } catch (err) {
    yield put(getPostFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

export function* getPostsWatcher() {
  yield takeLatest(
    [
      POSTS_TYPES.GET_POSTS_REQUEST,
      POSTS_TYPES.DELETE_POST_SUCCESS,
      POSTS_TYPES.ADD_NEW_POST_SUCCESS,
      POSTS_TYPES.EDIT_POST_SUCCESS,
    ],
    getPostsSaga,
  );
}

export function* addNewPostWatcher() {
  yield takeLatest(POSTS_TYPES.ADD_NEW_POST_REQUEST, addNewPostSaga);
}

export function* editPostWatcher() {
  yield takeLatest(POSTS_TYPES.EDIT_POST_REQUEST, editPostSaga);
}

export function* getPostWatcher() {
  yield takeLatest(POSTS_TYPES.GET_POST_REQUEST, getPostSaga);
}

export function* deletePostWatcher() {
  yield takeLatest(POSTS_TYPES.DELETE_POST_REQUEST, deletePostSaga);
}
