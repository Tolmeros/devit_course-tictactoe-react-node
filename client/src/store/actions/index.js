import {createAction} from 'redux-actions';

import {createRequestAction} from './helpers'

// game
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

// session

export const changeUserNameLocaly = createAction(
  'CHANGE_USER_NAME_LOCALY',
  (payload) => payload
);

export const makeLogin = createRequestAction(
  'LOGIN',
  ({userName}) => ({
    url: '/login',
    method: 'post',
    data: {
      userName,
    }
  })
);
