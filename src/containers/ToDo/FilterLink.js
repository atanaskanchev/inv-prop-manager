import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../state/actions/ToDo/action-creators';
import Link from '../../components/ToDo/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
