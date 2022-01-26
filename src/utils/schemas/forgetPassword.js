import * as yup from 'yup';
import {errorMessages} from './constantsForSchemas';

export const forgetPasswordInitialValues = {
  email: '',
};

export const forgetPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required)
    .label('Email'),
});
