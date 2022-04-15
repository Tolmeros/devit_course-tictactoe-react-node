import {connect} from 'react-redux';
import {clearField, makeTurn, nextTurn, turnToggle} from '../../store/actions';
import TicTacToe from './TicTacToe';
import {cells, turn} from '../../store/selectors';
import {createStructuredSelector} from 'reselect';

const mapStateToProps = createStructuredSelector({
  cells,
  turn,
});

const mapDispatchToProps = {
  clearField,
  makeTurn,
  turnToggle,
  nextTurn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
