import React from 'react';
import { shallow } from 'enzyme';
import BeerListItem from '../list-item';
import Component from '..';

describe('BeerList component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      list: [
        {
          name: 'Paulaner',
          description: 'some info',
          first_brewed: '09/1980',
        },
        {
          name: 'Becks',
          description: 'another info',
          first_brewed: '07/1970',
        },
      ],
    };
  });
  
  describe('render', () => {
    it('should not render if the list length is equal with zero', () => {
      propsToRender.list = [];
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(BeerListItem).length).toEqual(0);
    });
    
    it('should render a list of BeerListItem components if the list length is bigger than zero', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      const itemsList = wrapper.find(BeerListItem);
      const itemsNum = itemsList.length;
      expect(itemsNum).toEqual(propsToRender.list.length);
      let itemProps;
      for (let i = 0; i < itemsNum; i += 1) {
        itemProps = itemsList.at(i).props();
        expect(itemProps).toEqual(propsToRender.list[i]);
      }
    });
  });
});
