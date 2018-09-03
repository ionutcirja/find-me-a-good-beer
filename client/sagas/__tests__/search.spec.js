import { call, put, takeLatest } from 'redux-saga/effects';
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
    it('should yield a call to fetchBeerList api method and put a updateBeerList action in case of success', () => {
      const data = [{ name: 'Paulaner' }];
      const generator = sagas.requestBeerList('lamb');
      expect(generator.next().value).toEqual(call(api.fetchBeerList, 'lamb'));
      expect(generator.next(data).value).toEqual(put(actions.updateBeerList(data)));
      expect(generator.next().done).toEqual(true);
    });
    
    it('should yield a call to fetch api method and put a featuresUpdated action in case of error', () => {
      const error = { message: 'data loading failed' };
      const generator = sagas.requestBeerList('beef');
      expect(generator.next().value).toEqual(call(api.fetchBeerList, 'beef'));
      expect(generator.throw(error).value).toEqual(put(actions.updateBeerList(error)));
      expect(generator.next().done).toEqual(true);
    });
  });
});
