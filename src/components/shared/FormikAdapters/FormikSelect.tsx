import { useField } from 'formik';
import React from 'react';
import { FormikTextInputProps } from '../../../models/FormikModels';
import { Select } from '../Select';

const countries: string[] = ['USA', 'Ukraine', 'Ireland'];

export const FormikSelect = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Select options={countries} {...field} {...props} error={error} />;
};
