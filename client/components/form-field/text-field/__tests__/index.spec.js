import React from 'react';
import { shallow } from 'enzyme';
import {
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import Component from '..';

describe('TextField component', () => {
  describe('render', () => {
    let propsToRender;

    beforeEach(() => {
      propsToRender = {
        type: 'text',
        name: 'food',
        meta: {},
        disabled: true,
        placeholder: 'preferred food',
      };
    });

    it('should render an Input', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      const inputProps = wrapper.find(Input).props();
      expect(inputProps.id).toEqual(propsToRender.name);
      expect(inputProps.type).toEqual(propsToRender.type);
      expect(inputProps.placeholder).toEqual(propsToRender.placeholder);
      expect(inputProps.disabled).toEqual(propsToRender.disabled);
    });

    it('should render an InputLabel if label prop value is defined', () => {
      let wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(InputLabel).length).toEqual(0);

      propsToRender.label = 'Food';
      wrapper = shallow(<Component {...propsToRender} />);
      const label = wrapper.find(InputLabel);
      const labelProps = label.props();
      expect(label.childAt(0).text()).toEqual(propsToRender.label);
      expect(labelProps.htmlFor).toEqual(propsToRender.name);
    });

    it('should render a FormHelperText containing an error '
      + 'if meta touched prop value is true and meta error prop value is defined', () => {
      let wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      propsToRender.meta.touched = true;
      wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      propsToRender.meta.error = 'Food field is empty.';
      wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper.find(Input).props().error).toEqual(true);
      expect(wrapper.find(FormHelperText).childAt(0).text()).toEqual(propsToRender.meta.error);
    });
  });
});
