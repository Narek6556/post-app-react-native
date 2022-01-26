import {put, takeLatest, call} from 'redux-saga/effects';

import {
  forgetPasswordRequest,
  loginRequest,
  signUpRequest,
} from '../../utils/api/auth.api';
import {
  forgetPasswordFailure,
  forgetPasswordSuccess,
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
} from '../auth/actions';
import {AUTH_TYPES} from '../auth/types';
// import {StorageManager} from '../../utils/StorageManager';

function* loginSaga(data) {
  try {
    const res = yield call(loginRequest, data.payload);
    yield put(loginSuccess(res.data.accessToken));
    console.log('SUCCESS');
  } catch (err) {
    yield put(loginFailure(err));
    console.log('FAILURE', err.response);
  }
}

function* signUpSaga(data) {
  try {
    const res = yield call(signUpRequest, data.payload);
    yield put(signUpSuccess(res.status));
    console.log('SUCCESS');
  } catch (err) {
    yield put(signUpFailure(err));
    console.log('FAILURE', err.response);
  }
}

function* forgetPasswordSaga(action) {
  try {
    const res = yield call(forgetPasswordRequest, action.payload);
    yield put(forgetPasswordSuccess(res.status));
    console.log('SUCCESS');
  } catch (err) {
    yield put(forgetPasswordFailure(err));
    console.log('FAILURE', err.response);
  }
}

export function* loginWatcher() {
  yield takeLatest(AUTH_TYPES.LOGIN_REQUEST, loginSaga);
}

export function* signUpWatcher() {
  yield takeLatest(AUTH_TYPES.SIGNUP_REQUEST, signUpSaga);
}

export function* forgetPasswordWatcher() {
  yield takeLatest(AUTH_TYPES.FORGET_PASSWORD_REQUEST, forgetPasswordSaga);
}
