import {privateApi} from './index';

export const getUsersRequest = () => {
  return privateApi({
    method: 'get',
    url: 'users',
  });
};

export const getUserRequest = id => {
  return privateApi({
    method: 'get',
    url: `users/${id}`,
  });
};

export const getMyProfileRequest = () => {
  return privateApi({
    method: 'get',
    url: 'users/my-profile',
  });
};

export const editUserProfileRequest = data => {
  return privateApi({
    method: 'put',
    url: 'users',
    data,
  });
};
