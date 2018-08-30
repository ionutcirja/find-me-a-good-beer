import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from '../';
import validate from '../validate';
import * as UserActions from '../../../actions/user';

jest.mock('../validate');
jest.mock('../../../actions/user');

describe('Login container', () => {
  const createMockStore = configureMockStore();
  const store = createMockStore({});

  const expectedLoginAction = { type: 'LOGIN' };
  UserActions.login.mockReturnValue(expectedLoginAction);

  describe('render', () => {
    it('should render a Login component', () => {
      const component = shallow(<Container store={store} />).shallow().shallow().shallow();
      expect(component.find('Login').length).toEqual(1);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />).shallow().shallow().shallow();
      const props = component.props();
      props.actions.user.login();
      expect(UserActions.login).toHaveBeenCalled();
      expect(store.getActions()).toEqual([expectedLoginAction]);
    });
  });

  describe('form', () => {
    it('should have a name', () => {
      const component = shallow(<Container store={store} />).shallow();
      expect(component.props().form).toEqual('login');
    });

    it('should have a validation method', () => {
      const component = shallow(<Container store={store} />).shallow();
      component.props().validate();
      expect(validate).toHaveBeenCalled();
    });

    it('should call user login prop method on submit', () => {
      const component = shallow(<Container store={store} />).shallow();
      const props = {
        actions: {
          user: {
            login: jest.fn(),
          },
        },
      };
      const values = {
        username: 'john',
      };

      component.props().onSubmit(values, null, props);
      expect(props.actions.user.login).toHaveBeenCalledWith(values);
    });
  });
});
