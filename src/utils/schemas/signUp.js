import * as yup from 'yup';
import {errorMessages} from './constantsForSchemas';

export const signUpInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required(errorMessages.required).label('FirstName'),
  lastName: yup.string().required(errorMessages.required).label('LastName'),
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required)
    .label('Email'),
  password: yup
    .string()
    .required(errorMessages.required)
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .label('Password'),
});
