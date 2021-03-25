import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, 'Min 3 chars')
    .max(15, 'Max 15 chars')
    .required('First name is required'),
  lastName: Yup.string()
    .trim()
    .min(3, 'Min 3 chars')
    .max(15, 'Max 15 chars')
    .required('Last name is required'),
  username: Yup.string()
    .trim()
    .min(3, 'Min 3 chars')
    .max(15, 'Max 15 chars')
    .required('Username is required'),
  email: Yup.string().email().required('Email is required'),
  address: Yup.string().min(5, 'Min 5 chars').max(64, 'Max 64 chars').required('Address is required'),
  address2: Yup.string().min(5, 'Min 5 chars').max(64, 'Max 64 chars').optional(),
  country: Yup.string().required('Country is required'),
  state: Yup.string().min(3, 'Min 3 chars').max(24, 'Max 24 chars').optional(),
  zip: Yup.string().length(5, 'Must be a 5 chars').required('Zip code is required')
});
