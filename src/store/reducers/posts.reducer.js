import {POSTS_TYPES} from '../posts/types';

const initialValues = {
  data: {},
  error: null,
  isLoading: false,
};

const initialValuesOfGetPosts = {
  error: null,
  isLoading: false,
  data: [],
};

const initialState = {
  getPosts: {...initialValuesOfGetPosts},
  newPost: {...initialValues},
  deletePost: {...initialValues},
  editPost: {...initialValues},
  getPost: {...initialValues},
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_TYPES.GET_POSTS_REQUEST:
      return {
        ...state,
        getPosts: {
          ...initialValuesOfGetPosts,
          isLoading: true,
        },
      };
    case POSTS_TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        getPosts: {
          ...initialValuesOfGetPosts,
          data: action.payload,
        },
      };
    case POSTS_TYPES.GET_POSTS_FAILURE:
      return {
        ...state,
        getPosts: {
          ...initialValuesOfGetPosts,
          error: action.payload,
        },
      };
    case POSTS_TYPES.ADD_NEW_POST_REQUEST:
      return {
        ...state,
        newPost: {
          ...initialValues,
          isLoading: true,
        },
      };
    case POSTS_TYPES.ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        newPost: {
          ...initialValues,
          data: action.payload,
        },
      };
    case POSTS_TYPES.ADD_NEW_POST_FAILURE:
      return {
        ...state,
        newPost: {
          ...initialValues,
          error: action.payload,
        },
      };
    case POSTS_TYPES.DELETE_POST_REQUEST:
      return {
        ...state,
        deletePost: {
          ...initialValues,
          isLoading: true,
        },
      };
    case POSTS_TYPES.DELETE_POST_SUCCESS:
      return {
        ...state,
        deletePost: {
          ...initialValues,
        },
      };
    case POSTS_TYPES.DELETE_POST_FAILURE:
      return {
        ...state,
        deletePost: {
          ...initialValues,
        },
      };
    case POSTS_TYPES.GET_POST_REQUEST:
      return {
        ...state,
        getPost: {
          ...initialValues,
          isLoading: true,
        },
      };
    case POSTS_TYPES.GET_POST_SUCCESS:
      return {
        ...state,
        getPost: {
          ...initialValues,
          data: action.payload,
        },
      };
    case POSTS_TYPES.GET_POST_FAILURE:
      return {
        ...state,
        getPost: {
          ...initialValues,
          error: action.payload,
        },
      };
    case POSTS_TYPES.EDIT_POST_REQUEST:
      return {
        ...state,
        editPost: {
          ...initialValues,
          isLoading: true,
        },
      };
    case POSTS_TYPES.EDIT_POST_SUCCESS:
      return {
        ...state,
        editPost: {
          ...initialValues,
          data: action.payload,
        },
      };
    case POSTS_TYPES.EDIT_POST_FAILURE:
      return {
        ...state,
        editPost: {
          ...initialValues,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
