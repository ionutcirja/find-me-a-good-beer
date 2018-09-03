// @flow
import { handleActions } from 'redux-actions';
import { BeerList, Action } from '../constants/types';
import * as SearchActions from '../actions/search';

export default handleActions({
  [SearchActions.updateBeerList]: (state: BeerList, action: Action) => action.payload,
}, []);
