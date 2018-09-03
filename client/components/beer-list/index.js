// @flow
import React from 'react';
import { List } from '@material-ui/core';
import BeerListItem from './list-item';

type Props = {
  list: Array<{
    name: string,
    description: string,
    first_brewed: string,
  }>,
};

const BeerList = ({ list }: Props) => list.length
  ? (
    <List dense>
      {list.map(item => (
        <BeerListItem {...item} />
      ))}
    </List>)
  : null;

export default BeerList;
