export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email';
  autoComplete?: 'off';
  error?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

export interface SelectProps {
  options: string[];
  selected?: boolean;
  label?: string;
  name: string;
  value?: string;
  error?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

export interface initialValueI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  zip: number;
  sameAddress: boolean;
  saveInformation: boolean;
  payment: string;
}

export interface FormikCheckboxProps extends FormikCheckbox<InputProps> {
  type: string;
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export interface FormikRadioProps extends FormikRadio<InputProps> {
  type: string;
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export type FormikInput<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur'>;
export type FormikCheckbox<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
export type FormikRadio<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
