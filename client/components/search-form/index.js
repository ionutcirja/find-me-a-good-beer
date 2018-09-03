// @flow
import React from 'react';
import type { FormProps } from 'redux-form';
import { Grid, Button } from '@material-ui/core';
import FormField from '../form-field';

const SearchForm = ({ handleSubmit, pristine, submitting }: FormProps) => (
  <form onSubmit={handleSubmit}>
    <Grid
      container
      alignItems="center"
      direction="column"
    >
      <FormField
        type="text"
        name="food"
        label="Good evening Jacek! What would you like to have for dinner tonight?"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={pristine || submitting}
      >
        Find me a fancy beer
      </Button>
    </Grid>
  </form>);

export default SearchForm;
