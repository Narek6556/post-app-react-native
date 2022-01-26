import {AUTH_TYPES} from '../auth/types';

const initialValues = {
  data: null,
  error: null,
  isLoading: false,
};

const initialState = {
  login: {...initialValues},
  signUp: {...initialValues},
  forgetPassword: {...initialValues},
};

export const auth = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case AUTH_TYPES.LOGIN_REQUEST:
      console.log('Login request was worked');
      return {
        ...state,
        login: {
          ...initialValues,
          isLoading: true,
        },
      };
    case AUTH_TYPES.LOGIN_SUCCESS:
      console.log('Login success was worked');
      return {
        ...state,
        login: {
          ...initialValues,
          data: action.payload,
        },
      };
    case AUTH_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...initialValues,
          error: action.payload,
        },
      };
    case AUTH_TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        signUp: {
          ...initialValues,
          isLoading: true,
        },
      };
    case AUTH_TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...initialValues,
          data: action.payload,
        },
      };
    case AUTH_TYPES.SIGNUP_FAILURE:
      return {
        ...state,
        signUp: {
          ...initialValues,
          error: action.payload,
        },
      };
    case AUTH_TYPES.FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        forgetPassword: {
          ...initialValues,
          isLoading: true,
        },
      };
    case AUTH_TYPES.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetPassword: {
          ...initialValues,
          data: action.payload,
        },
      };
    case AUTH_TYPES.FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        forgetPassword: {
          ...initialValues,
          error: action.payload,
        },
      };
    case AUTH_TYPES.LOGOUT:
      console.log('action worked');
      return {
        ...initialState,
        login: {
          ...initialValues,
          data: null,
        },
      };
    default:
      return state;
  }
};
