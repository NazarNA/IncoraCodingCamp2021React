import React from 'react';
import { FormikTextInputProps } from '../../../models/FormikModels';
import css from './Input.module.scss';

export const Input = ({ label, error, ...props }: FormikTextInputProps) => {
  return (
    <div>
      <label className={css.label}>
        <div>{label}</div>
        <input {...props} className={css.input} />
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
