import {createAction} from 'redux-actions';

export const createRequestAction = (type, payloadCreator) => {
  const action = createAction(
    type,
    (...payload) => ({
      request: payloadCreator(...payload),
    })
  );
  action.success = type + '_SUCCESS';
  action.fail = type + '_FAIL';
  return action;

};
