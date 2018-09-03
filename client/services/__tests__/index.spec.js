import lowLevelApi from 'superagent-wrapper';
import * as api from '../search';

describe('Search services', () => {
  describe('fetchBeerList', () => {
    beforeEach(() => {
      lowLevelApi.get = jest.fn();
    });
    
    afterEach(() => {
      lowLevelApi.get.mockReset();
    });
    
    it('should call the low level api get method and fetch the correct url', () => {
      api.fetchBeerList('lamb');
      expect(lowLevelApi.get).toHaveBeenCalledWith('/beers?food=lamb');
    });
  });
});
