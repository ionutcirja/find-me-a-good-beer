// @flow
import { connect } from 'react-redux';
import { State } from '../../constants/types';
import BeerList from '../../components/beer-list';

const mapStateToProps = (state: State) => ({
  list: state.beerList,
});

export default connect(mapStateToProps)(BeerList);
