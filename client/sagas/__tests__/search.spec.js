import { call, put, takeLatest } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import * as sagas from '../search';
import * as api from '../../services/search';
import * as actions from '../../actions/search';

describe('Search sagas', () => {
  describe('watchSearchRequest', () => {
    it('should yield takeLatest BEER_LIST_REQUEST action', () => {
      const generator = sagas.watchSearchRequest();
      expect(generator.next().value).toEqual(takeLatest('BEER_LIST_REQUEST', sagas.requestBeerList));
      expect(generator.next().done).toEqual(true);
    });
  });
  
  describe('requestBeerList', () => {
    it('should yield put form startSubmit action, a call to fetchBeerList api method and '
      + 'put a form stopSubmit action and put an updateBeerList action in case of success', () => {
      const data = [{ name: 'Paulaner' }];
      const generator = sagas.requestBeerList({ payload: { food: 'lamb' } });
      expect(generator.next().value).toEqual(put(startSubmit('search-beer-form')));
      expect(generator.next().value).toEqual(call(api.fetchBeerList, 'lamb'));
      expect(generator.next(data).value).toEqual(put(actions.updateBeerList(data)));
      expect(generator.next().value).toEqual(put(stopSubmit('search-beer-form', null)));
      expect(generator.next().done).toEqual(true);
    });
    
    it('should put a stopSubmit action with an overall error message '
      + 'if api call is successful but data is empty', () => {
      const data = [];
      const generator = sagas.requestBeerList({ payload: { food: 'lamb' } });
      expect(generator.next().value).toEqual(put(startSubmit('search-beer-form')));
      expect(generator.next().value).toEqual(call(api.fetchBeerList, 'lamb'));
      expect(generator.next(data).value).toEqual(put(actions.updateBeerList(data)));
      expect(generator.next().value).toEqual(
        put(stopSubmit('search-beer-form', { _error: 'We couldn\'t find any beer to match with your meal.' })),
      );
      expect(generator.next().done).toEqual(true);
    });
    
    it('should yield a call to fetch api method and put a form stopSubmit action in case of error', () => {
      const error = { food: 'food name might be wrong' };
      const generator = sagas.requestBeerList({ payload: { food: 'beef' } });
      expect(generator.next().value).toEqual(put(startSubmit('search-beer-form')));
      expect(generator.next().value).toEqual(call(api.fetchBeerList, 'beef'));
      expect(generator.throw(error).value).toEqual(put(stopSubmit('search-beer-form', error)));
      expect(generator.next().done).toEqual(true);
    });
  });
});
