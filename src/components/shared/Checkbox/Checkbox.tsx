import React from 'react';
import { FormikCheckboxProps } from '../../../models/FormikModels';
import css from './Checkbox.module.scss';

export const Checkbox = ({ label, error, ...props }: FormikCheckboxProps) => {
  return (
    <div>
      <label>
        <input {...props} className={css.input} />
        <div className={css.label}>{label}</div>
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
