import {USERS_TYPES} from '../users/types';

const initialValues = {
  data: null,
  error: null,
  isLoading: false,
};

const initialValuesForGetUsers = {
  data: [],
  error: null,
  isLoading: false,
};

const initialState = {
  getUsers: {...initialValuesForGetUsers},
  getProfile: {...initialValues},
  getUser: {...initialValues},
  editUserProfile: {...initialValues},
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_TYPES.GET_USERS_REQUEST:
      return {
        ...state,
        getUsers: {
          ...initialValuesForGetUsers,
          isLoading: true,
        },
      };
    case USERS_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          ...initialValuesForGetUsers,
          data: action.payload,
        },
      };
    case USERS_TYPES.GET_USERS_FAILURE:
      return {
        ...state,
        getUsers: {
          ...initialValuesForGetUsers,
          error: action.payload,
        },
      };
    case USERS_TYPES.GET_PROFILE_REQUEST:
      return {
        ...state,
        getProfile: {
          ...initialValues,
          isLoading: true,
        },
      };
    case USERS_TYPES.GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfile: {
          ...initialValues,
          data: action.payload,
        },
      };
    case USERS_TYPES.GET_PROFILE_FAILURE:
      return {
        ...state,
        getProfile: {
          ...initialValues,
          error: action.payload,
        },
      };
    case USERS_TYPES.GET_USER_REQUEST:
      return {
        ...state,
        getUser: {
          ...initialValues,
          isLoading: true,
        },
      };
    case USERS_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        getUser: {
          ...initialValues,
          data: action.payload,
        },
      };
    case USERS_TYPES.GET_USER_FAILURE:
      return {
        ...state,
        getUser: {
          ...initialValues,
          error: action.payload,
        },
      };
    case USERS_TYPES.EDIT_USER_PROFILE_REQUEST:
      return {
        ...state,
        editUserProfile: {
          ...initialValues,
          isLoading: true,
        },
      };
    case USERS_TYPES.EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        editUserProfile: {
          ...initialValues,
          data: action.payload,
        },
      };
    case USERS_TYPES.EDIT_USER_PROFILE_FAILURE:
      return {
        ...state,
        editUserProfile: {
          ...initialValues,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
