import {createSelector} from 'reselect';

// create selectors for fields
const selectGame = (state) => state.game;

export const game = createSelector(selectGame, (state) => state);
export const gameLoadingError = createSelector(selectGame, (state) => state.loadingError);

const selectSession = (state) => state.session;

export const session = createSelector(selectSession, (state) => state);
export const sessionLoginFail = createSelector(selectSession, (state) => state.loginFail);
export const sessionLoginSuccess = createSelector(selectSession, (state) => state.loginSuccess);