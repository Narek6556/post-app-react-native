import * as yup from 'yup';
import {errorMessages} from './constantsForSchemas';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required)
    .label('Email'),
  password: yup
    .string()
    .required('please fill this field')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .label('Password'),
});
