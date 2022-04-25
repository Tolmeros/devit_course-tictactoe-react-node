//const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const gameSchema = Schema({
  game_uuid: String,
  playerO_uuid: String,
  playerX_uuid: String,
  currentTurn: String,
  cells: [String],
  active: Boolean,
  winner: String,
  draw: Boolean,
});

let game = {
  default: {
    currentTurn: 'x',
    cells: Array(9).fill(''),
  },
  uuids: {

  },
  currentTurn: 'x',
  cells: Array(9).fill(''),
}

module.exports = game;
