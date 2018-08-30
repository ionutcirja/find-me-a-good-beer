// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/search';
import validate from './validate';
import { SEARCH_FORM_NAME } from '../../constants/forms';
import SearchForm from '../../components/search-form';

type Values = {
  food: string,
};

type Props = {
  actions: {
    search: (values: Values) => void,
  },
};

const mapDispatchToProps = (dispatch: void) => ({
  actions: {
    search: bindActionCreators(searchActions, dispatch),
  },
});

const onSubmit = (values: Values, dispatch: void, props: Props) => {
  props.actions.search(values);
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: SEARCH_FORM_NAME,
  validate,
  onSubmit,
})(SearchForm));
