import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../../containers/search-form';
import BeerList from '../../../containers/beer-list';
import Component from '..';

describe('App component', () => {
  describe('render', () => {
    it('should render a SearchForm container', () => {
      const wrapper = shallow(<Component />).shallow();
      expect(wrapper.find(SearchForm).length).toEqual(1);
    });
  
    it('should render a BeerList container', () => {
      const wrapper = shallow(<Component />).shallow();
      expect(wrapper.find(BeerList).length).toEqual(1);
    });
  });
});
