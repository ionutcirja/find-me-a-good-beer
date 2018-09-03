import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from '..';
import validate from '../validate';
import * as SearchActions from '../../../actions/search';

jest.mock('../validate');
jest.mock('../../../actions/search');

describe('SearchForm container', () => {
  const createMockStore = configureMockStore();
  const store = createMockStore({});

  const expectedSearchAction = { type: 'SEARCH' };
  SearchActions.searchForBeer.mockReturnValue(expectedSearchAction);

  describe('render', () => {
    it('should render a SearchForm component', () => {
      const component = shallow(<Container store={store} />).shallow().shallow().shallow();
      expect(component.find('SearchForm').length).toEqual(1);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />).shallow().shallow().shallow();
      const props = component.props();
      props.actions.searchForBeer();
      expect(SearchActions.searchForBeer).toHaveBeenCalled();
      expect(store.getActions()).toEqual([expectedSearchAction]);
    });
  });

  describe('form', () => {
    it('should have a name', () => {
      const component = shallow(<Container store={store} />).shallow();
      expect(component.props().form).toEqual('search-beer-form');
    });

    it('should have a validation method', () => {
      const component = shallow(<Container store={store} />).shallow();
      component.props().validate();
      expect(validate).toHaveBeenCalled();
    });

    it('should call searchForBeer prop method on submit', () => {
      const component = shallow(<Container store={store} />).shallow();
      const props = {
        actions: {
          searchForBeer: jest.fn(),
        },
      };
      const values = {
        food: 'lamb',
      };

      component.props().onSubmit(values, null, props);
      expect(props.actions.searchForBeer).toHaveBeenCalledWith(values);
    });
  });
});
