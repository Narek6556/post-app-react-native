import {call, all} from 'redux-saga/effects';
import {forgetPasswordWatcher, loginWatcher, signUpWatcher} from './auth.sagas';
import {
  getPostsWatcher,
  addNewPostWatcher,
  deletePostWatcher,
  editPostWatcher,
  getPostWatcher,
} from './posts.sagas';
import {
  getMyProfileWatcher,
  editUserProfileWatcher,
  getUsersWatcher,
  getUserWatcher,
} from './users.sagas';

export const rootSaga = function* () {
  yield all([
    call(loginWatcher),
    call(getPostsWatcher),
    call(getMyProfileWatcher),
    call(signUpWatcher),
    call(forgetPasswordWatcher),
    call(addNewPostWatcher),
    call(deletePostWatcher),
    call(editPostWatcher),
    call(getPostWatcher),
    call(editUserProfileWatcher),
    call(getUsersWatcher),
    call(getUserWatcher),
  ]);
};
