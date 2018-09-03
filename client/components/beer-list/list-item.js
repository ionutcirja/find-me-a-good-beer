/* eslint-disable camelcase */
// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

const styles = {
  root: {
    display: 'block',
    marginBottom: 20,
  },
  info: {
    padding: 0,
    marginBottom: 5,
  },
  header: {
    marginBottom: 10,
  },
};

type Props = {
  name: string,
  description: string,
  first_brewed: string,
  classes: {
    root: string,
    info: string,
    header: string,
  },
};

const BeerListItem = ({
  name,
  description,
  first_brewed,
  classes: { root, header, info },
}: Props) => (
  <ListItem disableGutters divider dense className={root}>
    <ListItemText
      className={header}
      primary={name}
      secondary={`First brewed: ${first_brewed}`}
    />
    <ListItemText
      className={info}
      primary={description}
    />
  </ListItem>
);

export default withStyles(styles)(BeerListItem);
