import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {newGame, gameState, makeTurn} from '../../store/actions';
import TicTacToe from './TicTacToe';
//import {cells, turn, game} from '../../store/selectors';
import {game} from '../../store/selectors';

const mapStateToProps = createStructuredSelector({
  /*
  cells,
  turn,
  */
  game,
});

const mapDispatchToProps = {
  newGame,
  gameState,
  makeTurn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
