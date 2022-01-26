import React from 'react';
import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SCREEN_NAMES} from './screenNames';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetScreen/ForgetPasswordScreen';
import PostsScreen from '../screens/PostsScreen/PostsScreen';
import UsersScreen from '../screens/UsersScreen/UsersScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import AddNewPostScreen from '../screens/AddNewPostScreen/AddNewPostScreen';
import EditPostScreen from '../screens/EditPostScreen/editPostScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen/PostDetailsScreen';
import UsersProfileScreen from '../screens/UsersProfileScreen/UsersProfileScreen';

const ComponentWrapper = (Component, store) => props =>
  (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );

const addPersistGateToComponent = (Component, persistObject) => props =>
  (
    <PersistGate loading={null} persistor={persistObject}>
      <Component {...props} />
    </PersistGate>
  );

export const addPersistObject = persistObj => {
  const components = [
    LoginScreen,
    SignUpScreen,
    ForgetPasswordScreen,
    PostsScreen,
    UsersScreen,
    ProfileScreen,
    AddNewPostScreen,
    EditPostScreen,
    PostDetailsScreen,
    UsersProfileScreen,
  ];
  components.map(component => {
    addPersistGateToComponent(component, persistObj);
  });
};

export const registerScreens = store => {
  Navigation.registerComponent(
    SCREEN_NAMES.LOGIN_SCREEN,
    () => withNavigationProvider(ComponentWrapper(LoginScreen, store)),
    () => LoginScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.SIGN_UP_SCREEN,
    () => withNavigationProvider(ComponentWrapper(SignUpScreen, store)),
    () => SignUpScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.FORGET_PASSWORD_SCREEN,
    () => withNavigationProvider(ComponentWrapper(ForgetPasswordScreen, store)),
    () => ForgetPasswordScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.POSTS_SCREEN,
    () => withNavigationProvider(ComponentWrapper(PostsScreen, store)),
    () => PostsScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.PROFILE_SCREEN,
    () => withNavigationProvider(ComponentWrapper(ProfileScreen, store)),
    () => ProfileScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.USERS_SCREEN,
    () => withNavigationProvider(ComponentWrapper(UsersScreen, store)),
    () => UsersScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.ADD_NEW_POST_SCREEN,
    () => withNavigationProvider(ComponentWrapper(AddNewPostScreen, store)),
    () => AddNewPostScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.EDIT_POST_SCREEN,
    () => withNavigationProvider(ComponentWrapper(EditPostScreen, store)),
    () => EditPostScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.POST_DETAILS_SCREEN,
    () => withNavigationProvider(ComponentWrapper(PostDetailsScreen, store)),
    () => PostDetailsScreen,
  );
  Navigation.registerComponent(
    SCREEN_NAMES.USERS_PROFILE_SCREEN,
    () => withNavigationProvider(ComponentWrapper(UsersProfileScreen, store)),
    () => UsersProfileScreen,
  );
};
