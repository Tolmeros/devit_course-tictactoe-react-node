const mongoose = require('mongoose');

/*
const turnSchema = new Schema({
  type:String,
  validate: {
    validator: (v) => ((v === 'o') || (v === 'x')),
    message: (props) => `${props.value} is not 'o' or 'x'`,
  }
});
*/

const gameSchema = new mongoose.Schema({
  game_uuid: String,
  playerO_uuid: String,
  playerX_uuid: String,
  currentTurn: {
    type:String,
    validate: {
      validator: (v) => ((v === 'o') || (v === 'x')),
      message: (props) => `${props.value} is not 'o' or 'x'`,
    },
    default:'x',
  },
  cells: {
    type: Array,
    of: {
    type:String,
      validate: {
        validator: (v) => ((v === 'o') || (v === 'x') || (v === '')),
        message: (props) => `${props.value} is not 'o' or 'x' or ''`,
      }
    },
    default: Array(9).fill(''),
  },
  active: {
    type: Boolean,
    default: true,
  },
  winner: {
    type:String,
    validate: {
      validator: (v) => ((v === 'o') || (v === 'x') || (v === '')),
      message: (props) => `${props.value} is not 'o' or 'x' or ''`,
    },
    default: '',
  },
  draw: {
    type: Boolean,
    default: false,
  },
  started: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', gameSchema);
