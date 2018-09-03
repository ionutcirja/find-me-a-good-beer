// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import type { FormProps } from 'redux-form';
import { Grid, Button, FormHelperText } from '@material-ui/core';
import FormField from '../form-field';

const styles = {
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
};

const SearchForm = ({
  handleSubmit,
  pristine,
  submitting,
  error,
  classes: { button },
}: FormProps) => (
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
        className={button}
        type="submit"
        variant="contained"
        color="primary"
        disabled={pristine || submitting}
      >
        {submitting ? 'Searching' : 'Find me a fancy beer'}
      </Button>
      {error && <FormHelperText>{error}</FormHelperText>}
    </Grid>
  </form>);

export default withStyles(styles)(SearchForm);
