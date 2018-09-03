import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../../containers/search-form';
import Component from '..';

describe('App component', () => {
  describe('render', () => {
    it('should render a SearchForm component', () => {
      const wrapper = shallow(<Component />).shallow();
      expect(wrapper.find(SearchForm).length).toEqual(1);
    });
  });
});
