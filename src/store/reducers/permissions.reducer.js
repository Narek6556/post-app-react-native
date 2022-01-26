import {PERMISSION_TYPES} from '../permissions/types';

const initialValues = {
  access: false,
};

const initialState = {
  photoLibrary: {...initialValues},
};

export const permissions = (state = initialState, action) => {
  switch (action.type) {
    case PERMISSION_TYPES.PHOTO_LIBRARY_ACCESS:
      return {
        ...state,
        photoLibrary: {
          access: true,
        },
      };
    default:
      return state;
  }
};
