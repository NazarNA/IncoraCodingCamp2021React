import React from 'react';
import { SelectProps } from '../../../models/FormikModels';
import css from './Select.module.scss';

export const Select = ({ label, error, options, ...props }: SelectProps) => {
  return (
    <div>
      <label className={css.label}>
        <div>{label}</div>
        <select {...props} className={css.input}>
          <option value=''>Chose...</option>
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
