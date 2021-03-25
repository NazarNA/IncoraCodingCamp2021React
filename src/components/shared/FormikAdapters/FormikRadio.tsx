import { useField } from 'formik';
import React from 'react';
import { FormikTextInputProps } from '../../../models/FormikModels';
import { Radio } from '../Radio';

export const FormikRadio = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Radio type='radio' {...field} {...props} error={error} />;
};
