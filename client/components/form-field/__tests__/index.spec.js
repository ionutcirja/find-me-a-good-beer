import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../text-field';
import Component from '..';

describe('Form component', () => {
  describe('render', () => {
    let propsToRender;

    beforeEach(() => {
      propsToRender = {
        type: 'text',
        name: 'username',
      };
    });

    it('should render a TextField component wrapped in a redux form Field component '
      + 'if type prop value is text', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      const fieldProps = wrapper.find('Field').props();
      expect(fieldProps.type).toEqual(propsToRender.type);
      expect(fieldProps.name).toEqual(propsToRender.name);
      expect(fieldProps.component).toEqual(TextField);
    });
  });
});
