import {handleActions} from 'redux-actions';
import {newGame, gameState, makeTurn} from '../actions';

const defaultGameState = {
  cells: Array(9).fill(''),
  currentTurn: '',
  winner: null,
  draw: false,
  loading: false,
}

const commonGameRequest = (state, {payload}) => {
  console.log('commonGameLoader', payload);
  return {
    ...state,
    loading: true,
  }
};

const handleGameStateSuccess = (state, {payload}) => {
  console.log('handleNewGameSuccess', payload);
  return {
    ...state,
    cells: payload.data.cells,
    currentTurn: payload.data.currentTurn,
    winner: payload.data.winner,
    draw: payload.data.draw,
    loading: false,
  }
};

const handleFail = (state, action) => {
  console.log('handleFail', action);
  return {
    ...state,
    loading: false,
  }
};

const gameReducer = handleActions(
  {
    [newGame]: commonGameRequest,
    [newGame.success]: handleGameStateSuccess,
    [newGame.fail]: handleFail,
    [gameState]: commonGameRequest,
    [gameState.success]: handleGameStateSuccess,
    [gameState.fail]: handleFail,
    [makeTurn]: commonGameRequest,
    [makeTurn.success]: handleGameStateSuccess,
    [makeTurn.fail]: handleFail,
  },
  defaultGameState
);

export default gameReducer;
