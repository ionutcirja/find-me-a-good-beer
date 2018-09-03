import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from '..';

describe('BeerList container', () => {
  const createMockStore = configureMockStore();
  const state = {
    beerList: [
      {
        name: 'Paulaner',
      },
      {
        name: 'Becks',
      },
    ],
  };
  const store = createMockStore(state);
  
  describe('render', () => {
    it('should render a BeerList component', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('BeerList').length).toEqual(1);
    });
  });
  
  describe('mapStateToProps', () => {
    it('should pass the beer list prop', () => {
      const component = shallow(<Container store={store} />);
      const props = component.find('BeerList').props();
      expect(props.list).toEqual(state.beerList);
    });
  });
});
