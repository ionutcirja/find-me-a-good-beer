// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import beerList from './beer-list';

export default combineReducers({
  form: formReducer,
  beerList,
});
