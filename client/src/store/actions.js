import {createAction} from 'redux-actions';

export const turnToggle = createAction('TURN_TOGGLE');

/*
export const nextTurn = createAction(
  'TURN', 
  (player) => player
);
*/

const createRequestAction = (type, payloadCreator) => {
  const action = createAction(
  type, 
  (...payload) => ({
    request: payloadCreator(...payload),
    
  }));
  action.success = type + '_SUCCESS';
  action.fail = type + '_FAIL';
  return action;

};


export const nextTurn = createRequestAction(
  'TURN', 
  (player) => ({
    url:'/game',
    method:'put',
    data: {
      player,
    }
  })
);

export const makeTurn = createAction(
  'CHANGE',
  (turn) => turn
);

export const clearField = createAction('CLEAR');
