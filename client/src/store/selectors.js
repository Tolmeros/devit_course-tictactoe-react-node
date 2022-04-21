import {createSelector} from 'reselect';

// create selectors for fields
const selectGame = (state) => state.game;

export const game = createSelector(selectGame, (state) => state);

const selectSession = (state) => state.session;

export const session = createSelector(selectSession, (state) => state);
