import React from 'react';
import { shallow } from 'enzyme';
import { ListItemText } from '@material-ui/core';
import Component from '../list-item';

describe('BeerListItem component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      name: 'Paulaner',
      description: 'some info',
      first_brewed: '09/1980',
    };
  });
  
  describe('render', () => {
    it('should render a ListItemText containing the name and the first brewed date props values', () => {
      const wrapper = shallow(<Component {...propsToRender} />).shallow();
      const textProps = wrapper.find(ListItemText).at(0).props();
      expect(textProps.primary).toEqual(propsToRender.name);
      expect(textProps.secondary).toContain(propsToRender.first_brewed);
    });
  
    it('should render a ListItemText containing the description prop value', () => {
      const wrapper = shallow(<Component {...propsToRender} />).shallow();
      const textProps = wrapper.find(ListItemText).at(1).props();
      expect(textProps.primary).toEqual(propsToRender.description);
    });
  });
});
