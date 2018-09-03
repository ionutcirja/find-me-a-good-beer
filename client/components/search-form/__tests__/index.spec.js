import React from 'react';
import { shallow } from 'enzyme';
import { Button, FormHelperText } from '@material-ui/core';
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
      const wrapper = shallow(<Component {...propsToRender} />).shallow();
      expect(wrapper.find('form').props().onSubmit).toEqual(propsToRender.handleSubmit);
    });
    
    it('should render a submit button which should be disabled if form is pristine or submitting', () => {
      let wrapper = shallow(<Component {...propsToRender} />).shallow();
      let buttonProps = wrapper.find(Button).props();
      expect(buttonProps.type).toEqual('submit');
      expect(buttonProps.disabled).toEqual(false);
      
      propsToRender.submitting = true;
      wrapper = shallow(<Component {...propsToRender} />).shallow();
      buttonProps = wrapper.find(Button).props();
      expect(buttonProps.disabled).toEqual(true);
  
      propsToRender.submitting = false;
      propsToRender.pristine = true;
      wrapper = shallow(<Component {...propsToRender} />).shallow();
      buttonProps = wrapper.find(Button).props();
      expect(buttonProps.disabled).toEqual(true);
    });
    
    it('should render a food text FormField component', () => {
      const wrapper = shallow(<Component {...propsToRender} />).shallow();
      const tagProps = wrapper.find('FormField').props();
      expect(tagProps.type).toEqual('text');
      expect(tagProps.name).toEqual('food');
    });
  
    it('should render an error message if error prop value is defined', () => {
      propsToRender.error = 'Some overall error message';
      const wrapper = shallow(<Component {...propsToRender} />).shallow();
      expect(wrapper.find(FormHelperText).childAt(0).text()).toEqual(propsToRender.error);
    });
  });
});
