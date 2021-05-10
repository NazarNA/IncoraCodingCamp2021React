import * as Yup from 'yup';

export const weatherSchema = Yup.object().shape({
  city: Yup.string()
    .min(3, 'The name of the city must consist of at least 3 letters')
    .max(15, 'City name should not be longer than 15 letters')
    .required('You need to enter city name!')
});
