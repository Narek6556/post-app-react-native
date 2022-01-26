import * as yup from 'yup';
import {errorMessages} from './constantsForSchemas';

export const editPostInitialValues = {
  title: '',
  body: '',
  image: '',
};

export const editPostValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(15, errorMessages.max(15))
    .required(errorMessages.required),
  body: yup.string().required(errorMessages.required),
});
