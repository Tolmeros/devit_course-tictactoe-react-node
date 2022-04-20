import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {clearField, makeTurn, nextTurn, turnToggle} from './actions';

const defaultTurnState = {
  turn: 'x',
  loading: false,
}

const handleTurnToggle = (state) => (state.turn === 'x') 
  ? {...state, turn: 'o'}
  : {...state, turn: 'x'};

const handleTurn = (state, {payload}) => {
 console.log('handleTurn', payload);
 return {
  ...state,
  loading: true,
 }
};

const handleTurnSucces = (state, {payload}) => {
 console.log('handleTurnSucces', payload);

 return {
  ...state,
  loading: false,
  turn: payload.data.turn
 }
};

const turnReducer = handleActions(
  {
    [nextTurn]: commonLoader,
    [nextTurn.success]: handleTurnSucces,
    [nextTurn.fail]: handleTurnFail,
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
