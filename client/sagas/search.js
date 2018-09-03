import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import { SEARCH_BEER_FORM_NAME } from '../constants/forms';
import { BEER_NOT_FOUND } from '../constants/validation-messages';
import { fetchBeerList } from '../services/search';
import { updateBeerList } from '../actions/search';
import { Action } from '../constants/types';
import { BEER_LIST_REQUEST } from '../constants/action-types';

export function* requestBeerList(action: Action) {
  const { food } = action.payload;
  yield put(startSubmit(SEARCH_BEER_FORM_NAME));
  
  try {
    const data = yield call(fetchBeerList, food);
    yield put(updateBeerList(data));
    const error = !data.length ? { _error: BEER_NOT_FOUND } : null;
    yield put(stopSubmit(SEARCH_BEER_FORM_NAME, error));
  } catch (error) {
    yield put(stopSubmit(SEARCH_BEER_FORM_NAME, error));
  }
}

export function* watchSearchRequest() {
  yield takeLatest(BEER_LIST_REQUEST, requestBeerList);
}
