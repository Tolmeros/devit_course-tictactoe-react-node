import {createAction} from 'redux-actions';

export const turnToggle = createAction('TURN_TOGGLE');

export const nextTurn = createAction(
  'TURN', 
  (player) => player
);

export const makeTurn = createAction(
  'CHANGE',
  (turn) => turn
);

export const clearField = createAction('CLEAR');
