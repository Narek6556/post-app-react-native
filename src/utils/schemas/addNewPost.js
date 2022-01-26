import * as yup from 'yup';
import {errorMessages} from './constantsForSchemas';

export const addNewPostInitialValues = {
  title: '',
  body: '',
  image: '',
};

export const addNewPostValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(15, errorMessages.max(15))
    .required(errorMessages.required)
    .label('title'),
  body: yup.string().required(errorMessages.required).label('body'),
});
