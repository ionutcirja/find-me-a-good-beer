import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset } from 'redux-form';
import { SEARCH_BEER_FORM_NAME } from '../constants/forms';
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
    yield put(reset(SEARCH_BEER_FORM_NAME));
    yield put(stopSubmit(SEARCH_BEER_FORM_NAME));
  } catch (error) {
    yield put(stopSubmit(SEARCH_BEER_FORM_NAME, error));
  }
}

export function* watchSearchRequest() {
  yield takeLatest(BEER_LIST_REQUEST, requestBeerList);
}
