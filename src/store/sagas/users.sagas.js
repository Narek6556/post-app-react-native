import {put, call, takeLatest} from 'redux-saga/effects';

import {
  getMyProfileRequest,
  getUsersRequest,
  getUserRequest,
  editUserProfileRequest,
} from '../../utils/api/users.api';
import {
  getProfileSuccess,
  getProfileFailure,
  getUsersSuccess,
  getUsersFailure,
  editUserProfileSuccess,
  editUserProfileFailure,
  getUserSuccess,
  getUserFailure,
} from '../users/actions';
import {USERS_TYPES} from '../users/types';

function* getProfileSaga() {
  try {
    const res = yield call(getMyProfileRequest);
    console.log('SUCCESS');
    yield put(getProfileSuccess(res.data));
  } catch (err) {
    yield put(getProfileFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* getUserSaga(action) {
  try {
    const res = yield call(getUserRequest, action.payload);
    console.log('SUCCESS');
    yield put(getUserSuccess(res.data));
  } catch (err) {
    yield put(getUserFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* getUsersSaga() {
  try {
    const res = yield call(getUsersRequest);
    console.log('SUCCESS', res);
    yield put(getUsersSuccess(res.data.results));
  } catch (err) {
    yield put(getUsersFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

function* editUserProfileSaga() {
  try {
    const res = yield call(editUserProfileRequest);
    console.log('SUCCESS');
    yield put(editUserProfileSuccess(res.data));
  } catch (err) {
    yield put(editUserProfileFailure(err.response));
    console.log('FAILURE', err.response);
  }
}

export function* getMyProfileWatcher() {
  yield takeLatest(USERS_TYPES.GET_PROFILE_REQUEST, getProfileSaga);
}

export function* getUsersWatcher() {
  yield takeLatest(USERS_TYPES.GET_USERS_REQUEST, getUsersSaga);
}

export function* editUserProfileWatcher() {
  yield takeLatest(USERS_TYPES.EDIT_USER_PROFILE_REQUEST, editUserProfileSaga);
}

export function* getUserWatcher() {
  yield takeLatest(USERS_TYPES.GET_USER_REQUEST, getUserSaga);
}
