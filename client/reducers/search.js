// @flow
import { handleActions } from 'redux-actions';
import { BeerList } from '../constants/types';
import * as SearchActions from '../actions/search';

export default handleActions({
  [SearchActions.searchForBeer]: (state: BeerList) => state,
}, []);
