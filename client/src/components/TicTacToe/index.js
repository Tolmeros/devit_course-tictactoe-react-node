import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {newGame, gameState, makeTurn} from '../../store/actions';
import TicTacToe from './TicTacToe';
import {game, gameLoadingError} from '../../store/selectors';

const mapStateToProps = createStructuredSelector({
  game,
  gameLoadingError,
});

const mapDispatchToProps = {
  newGame,
  gameState,
  makeTurn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
