import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {gameState} from '../../store/actions';
import {gameLoadingError} from '../../store/selectors';

import Home from './Home';

const mapStateToProps = createStructuredSelector({
  gameLoadingError,
});

const mapDispatchToProps = {
  gameState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
