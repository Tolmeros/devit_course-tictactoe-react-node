import {createSelector} from 'reselect';

// create selectors for fields
const selectGame = (state) => state.game;

export const game = createSelector(selectGame, (state) => state);
