import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import Component from '..';

describe('SearchForm component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      handleSubmit: jest.fn(),
      pristine: false,
      submitting: false,
    };
  });
  
  describe('render', () => {
    it('should render a form with a submit method', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find('form').props().onSubmit).toEqual(propsToRender.handleSubmit);
    });
    
    it('should render a submit button which should be disabled if form is pristine or submitting', () => {
      let wrapper = shallow(<Component {...propsToRender} />);
      let buttonProps = wrapper.find(Button).props();
      expect(buttonProps.type).toEqual('submit');
      expect(buttonProps.disabled).toEqual(false);
      
      propsToRender.submitting = true;
      wrapper = shallow(<Component {...propsToRender} />);
      buttonProps = wrapper.find(Button).props();
      expect(buttonProps.disabled).toEqual(true);
  
      propsToRender.submitting = false;
      propsToRender.pristine = true;
      wrapper = shallow(<Component {...propsToRender} />);
      buttonProps = wrapper.find(Button).props();
      expect(buttonProps.disabled).toEqual(true);
    });
    
    it('should render a food text FormField component', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      const tagProps = wrapper.find('FormField').props();
      expect(tagProps.type).toEqual('text');
      expect(tagProps.name).toEqual('food');
    });
  });
});
