import React from 'react';
import { FormikRadioProps } from '../../../models/FormikModels';
import css from './Radio.module.scss';

export const Radio = ({ label, error, ...props }: FormikRadioProps) => {
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
