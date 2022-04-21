import {combineReducers} from 'redux';
import gameReducer from './game'
import sessionReducer from './session'

export default combineReducers({
  game: gameReducer,
  session: sessionReducer,
});
