import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import Component from '..';

describe('SearchForm component', () => {
  const propsToRender = {
    handleSubmit: jest.fn(),
  };
  
  describe('render', () => {
    it('should render a form with a submit method', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find('form').props().onSubmit).toEqual(propsToRender.handleSubmit);
    });
    
    it('should render a submit button', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(Button).props().type).toEqual('submit');
    });
    
    it('should render a food text FormField component', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      const tagProps = wrapper.find('FormField').props();
      expect(tagProps.type).toEqual('text');
      expect(tagProps.name).toEqual('food');
    });
  });
});
