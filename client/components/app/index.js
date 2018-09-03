// @flow
import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchForm from '../../containers/search-form';

const styles = {
  root: {
    padding: 40,
  },
};

type Props = {
  classes: {
    root: string,
  },
};

const App = ({ classes: { root } }: Props) => (
  <Grid
    className={root}
    container
    alignItems="center"
    direction="column"
    justify="center"
  >
    <SearchForm key="search-beer-form" />
  </Grid>
);

export default withStyles(styles)(App);
