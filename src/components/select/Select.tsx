import { Field } from 'formik';
import React from 'react';
import { FormikTextInputProps } from '../../models/formik';

export const Select = ({ name, label, error, ...props }: FormikTextInputProps) => {
  const options: any[] = [];
  // options from props
  return (
    <div>
      <label>
        <span>{label}</span>
        <select name={name} id={name}>
          {options.map((option: any) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div>{error}</div>}
      </label>
    </div>
  );
};
