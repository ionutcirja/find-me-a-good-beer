import deepFreeze from 'deep-freeze';
import reducer from '../beer-list';

describe('BeerList reducer', () => {
  it('should return the default state if the action type is not defined', () => {
    const initialState = [{ name: 'Paulaner' }];
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'UNDEFINED_ACTION' })).toEqual(initialState);
  });
  
  it('should return a new state containing the payload data if action type is UPDATE_BEER_LIST ', () => {
    const initialState = [];
    const payload = [{ name: 'Paulaner' }];
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'UPDATE_BEER_LIST', payload })).toEqual(payload);
  });
});
