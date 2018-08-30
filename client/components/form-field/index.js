// @flow
import React from 'react';
import { Field } from 'redux-form';
import TextField from './text-field';

type Props = {
  type: 'text' | 'hidden',
  name: string,
};

const FormField = (props: Props) => {
  switch (props.type) {
    case 'text':
    default:
      return (<Field {...props} component={TextField} />);
  }
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
