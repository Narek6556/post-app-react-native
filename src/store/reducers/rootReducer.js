import {combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {auth} from './auth.reducer';
import {posts} from './posts.reducer';
import {users} from './users.reducer';
import {permissions} from './permissions.reducer';

const persistAuthConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['login'],
};

const persistPermissionsConfig = {
  key: 'permissions',
  storage: AsyncStorage,
  whitelist: ['photoLibrary'],
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, auth),
  posts,
  users,
  permissions: persistReducer(persistPermissionsConfig, permissions),
});
