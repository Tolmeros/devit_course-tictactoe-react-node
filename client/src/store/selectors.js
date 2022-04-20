import {createSelector} from 'reselect';

/*
const selectTurn = (state) => state.turn;

export const turn = createSelector(selectTurn, (state) => state.turn);

const selectCells = (state) => state.cells;

export const cells = createSelector(selectCells, (state) => state.cells);
*/

const selectGame = (state) => state.game;

export const game = createSelector(selectGame, (state) => state);
