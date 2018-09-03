// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Dispatch } from '../../constants/types';
import * as searchActions from '../../actions/search';
import validate from './validate';
import { SEARCH_BEER_FORM_NAME } from '../../constants/forms';
import SearchForm from '../../components/search-form';

type Values = {
  food: string,
};

type Props = {
  actions: {
    searchForBeer: (values: Values) => void,
  },
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(searchActions, dispatch),
});

const onSubmit = (values: Values, dispatch: void, props: Props) => {
  props.actions.searchForBeer(values);
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: SEARCH_BEER_FORM_NAME,
  validate,
  onSubmit,
})(SearchForm));
