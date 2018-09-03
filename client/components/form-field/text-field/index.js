// @flow
import React from 'react';
import type { FieldProps } from 'redux-form';
import {
  FormGroup,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

type Props = FieldProps & {
  name: string,
  type: string,
  label?: string,
  placeholder?: string,
  disabled?: boolean,
};

const ReduxFormTextField = ({
  label,
  name,
  input,
  placeholder,
  type,
  disabled,
  meta: { touched, error },
}: Props) => (
  <FormGroup>
    {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
    <Input
      {...input}
      error={touched && !!error}
      id={name}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormGroup>);

ReduxFormTextField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
};

export default ReduxFormTextField;
