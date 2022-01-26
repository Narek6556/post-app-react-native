import {publicApi} from './index';
export const loginRequest = data => {
  return publicApi({
    method: 'post',
    url: '/auth/login',
    data,
  });
};

export const signUpRequest = data => {
  return publicApi({
    method: 'post',
    url: '/auth/register',
    data,
  });
};

export const forgetPasswordRequest = email => {
  return publicApi({
    method: 'post',
    url: '/auth/forgot-password',
    data: {
      email,
    },
  });
};
