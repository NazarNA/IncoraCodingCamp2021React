import { useField } from 'formik';
import React from 'react';
import { FormikTextInputProps } from '../../../models/FormikModels';
import { Checkbox } from '../Checkbox';

export const FormikCheckbox = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Checkbox type='checkbox' {...field} {...props} error={error} />;
};
