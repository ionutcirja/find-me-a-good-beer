import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchBeerList } from '../services/search';
import { updateBeerList } from '../actions/search';
import { BEER_LIST_REQUEST } from '../constants/action-types';

export function* requestBeerList(food) {
  try {
    const data = yield call(fetchBeerList, food);
    yield put(updateBeerList(data));
  } catch (error) {
    yield put(updateBeerList(error));
  }
}

export function* watchSearchRequest() {
  yield takeLatest(BEER_LIST_REQUEST, requestBeerList);
}
