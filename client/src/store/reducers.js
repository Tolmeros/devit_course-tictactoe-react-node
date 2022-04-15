import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {clearField, makeTurn, nextTurn, turnToggle} from './actions';

const defaultTurnState = {
  turn: 'x',
}

const handleTurnToggle = (state) => (state.turn === 'x') 
  ? {...state, turn: 'o'}
  : {...state, turn: 'x'};

const handleTurn = (state, {payload}) => ({
  ...state,
  turn: payload
});

const turnReducer = handleActions(
  {
    [nextTurn]: handleTurn,
    [turnToggle]: handleTurnToggle,
  },
  defaultTurnState
);

const defaultCellsState = {
  cells: Array(9).fill(''),
}

const handleAddTurnToCells = (state, {payload}) => {
  const cells = [...state.cells];
  const {index, player} = payload;
  cells[index] = player;
  return {
    ...state,
    cells,
  }
};

const handleClearCells = (state) => (defaultCellsState);


const cellsReducer = handleActions(
  {
    [makeTurn]: handleAddTurnToCells,
    [clearField]: handleClearCells,
  },
  defaultCellsState
);



export default combineReducers({
  turn: turnReducer,
  cells: cellsReducer,
});
