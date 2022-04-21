import {handleActions} from 'redux-actions';
import {changeUserNameLocaly} from '../actions';

const defaultSessionState = {
  userName: localStorage.getItem("session_user_name") || '',
  token: localStorage.getItem("session_token") || '',
  loading: false,
}

const hangleChangeUserNameLocaly = (state, {payload}) => {
  console.log('hangleChangeUserNameLocaly', payload);
  localStorage.setItem("session_user_name", payload);
  return {
    ...state,
    userName: payload,
    loading: true,
  }
};

const sessionReducer = handleActions(
  {
    [changeUserNameLocaly]: hangleChangeUserNameLocaly,
  },
  defaultSessionState
);

export default sessionReducer;
