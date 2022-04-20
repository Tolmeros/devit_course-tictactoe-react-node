import {createAction} from 'redux-actions';

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

export const newGame = createRequestAction(
  'NEW_GAME',
  () => ({
    url: '/game',
    method: 'delete',
  })
);

export const gameState = createRequestAction(
  'GAME_STATE',
  () => ({
    url: '/game',
    method: 'get',
  })
);

export const makeTurn = createRequestAction(
  'MAKE_TURN',
  ({player, cell}) => ({
    url: '/game',
    method: 'put',
    data: {
      player,
      cell
    }
  })
);


