import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {changeUserNameLocaly, makeLogin, gameState} from '../../store/actions';
import Login from './Login';
//import {cells, turn, game} from '../../store/selectors';
import {session, sessionLoginFail, sessionLoginSuccess, gameLoadingError} from '../../store/selectors';

const mapStateToProps = createStructuredSelector({
  session,
  sessionLoginFail,
  sessionLoginSuccess,
  gameLoadingError,
});

const mapDispatchToProps = {
  changeUserNameLocaly,
  makeLogin,
  gameState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
