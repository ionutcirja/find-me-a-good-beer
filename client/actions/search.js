import { createAction } from 'redux-actions';
import { BEER_LIST_REQUEST, UPDATE_BEER_LIST } from '../constants/action-types';

export const searchForBeer = createAction(BEER_LIST_REQUEST);
export const updateBeerList = createAction(UPDATE_BEER_LIST);
