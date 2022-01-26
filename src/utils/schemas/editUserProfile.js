import * as yup from 'yup';
import errorMessages from './constantsForSchemas';

export const editUserProfileInitialValues = {
  firstName: '',
  lastName: '',
  password: '',
  profilePicture: '',
  email: '',
};

export const editUserProfileValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, errorMessages.min(2))
    .max(12, errorMessages.max(12))
    .required(errorMessages.required),
  lastName: yup
    .string()
    .min(2, errorMessages.min(2))
    .max(12, errorMessages.max(12))
    .required(errorMessages.required),
  password: yup
    .string()
    .min(8, errorMessages.min(8))
    .max(12, errorMessages.max(12))
    .required(errorMessages.required),
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required),
});
