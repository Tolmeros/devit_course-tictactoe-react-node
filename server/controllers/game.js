//const cells = require('../models/cells.js');
const game = require('../models/game.js');

const combos = {
  horizontal: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  vertical: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
  diagonal: [
    [0, 4, 8],
    [2, 4, 6],
  ],
};

const checkForWinner = (squares) => {
  for (let combo in combos) {
    for (let pattern of combos[combo]) {
      if (
        squares[pattern[0]] === squares[pattern[1]] &&
        squares[pattern[1]] === squares[pattern[2]] &&
        squares[pattern[0]] !== ''
      ) {
        return squares[pattern[0]];
      }
    }
  }

  return null;
};

const turnCount = () => cells.reduce((count, cell) => {
  return cell ? count + 1 : count;
}, 0);

function get(ctx) {
  const winner = checkForWinner(game.cells);
  const draw = (!winner && turnCount === 9);

  const result = {
    ...game,
    winner,
    draw,
  }

  ctx.body = result;
}

function newGame(ctx) {
  game.cells.fill('');
  game.currentTurn = 'x';
  get(ctx, next);
}

function nextPlayer() {
  if (game.currentTurn === 'x') {
    game.currentTurn = 'o';
  } else {
    game.currentTurn = 'x';
  }
}

function turn(ctx) {
  console.log(ctx.request.body);
  console.log(typeof ctx.request.body);
  //ctx.body = 'ok';
  const turn = ctx.request.body;
  if (('player' in turn) && ('cell' in turn)) {
    if (turn.player === game.currentTurn) {
      game.cells[turn.cell] = turn.player;
      nextPlayer();
  
      get(ctx);
    } else {
      ctx.body = ctx.request.body;
    }
  } else {
    ctx.body = ctx.request.body;
  }
}

module.exports = {
  get,
  newGame,
  turn
}
