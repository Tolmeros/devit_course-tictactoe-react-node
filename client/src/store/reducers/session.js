import {handleActions} from 'redux-actions';
import {changeUserNameLocaly, makeLogin} from '../actions';

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

const commonSessionRequest = (state, {payload}) => {
  console.log('commonSessionRequest', payload);
  return {
    ...state,
    loading: true,
  }
};

const handleFail = (state, action) => {
  console.log('handleFail', action);
  return {
    ...state,
    loading: false,
  }
};

const handlemakeLoginSuccess = (state, {payload}) => {
  console.log('handlemakeLoginSuccess', payload);
  return {
    ...state,
    token: payload.data.token,
    loading: true,
  }
};

const sessionReducer = handleActions(
  {
    [changeUserNameLocaly]: hangleChangeUserNameLocaly,
    [makeLogin]: commonSessionRequest,
    [makeLogin.success]: handlemakeLoginSuccess,
    [makeLogin.fail]: handleFail,
  },
  defaultSessionState
);

export default sessionReducer;
