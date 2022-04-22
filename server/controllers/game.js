const structuredClone = require('realistic-structured-clone');

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

const turnCount = (cells) => cells.reduce((count, cell) => {
  return cell ? count + 1 : count;
}, 0);

function get(ctx) {
  console.log('get', ctx.request.body);
  let sessionGame = checkCreateSession(ctx.state.user);

  const winner = checkForWinner(sessionGame.cells);
  const draw = (!winner && turnCount(sessionGame.cells) === 9);

  const result = {
    ...sessionGame,
    winner,
    draw,
  }

  console.log(result);
  ctx.body = result;
  //ctx.response.status = 200; //?
}

function newGame(ctx) {
  console.log('newGame', ctx.request.body);
  let sessionGame = checkCreateSession(ctx.state.user);

  sessionGame.cells.fill('');
  sessionGame.currentTurn = 'x';

  get(ctx);
}

function nextTurn(currentTurn) {
  return (currentTurn === 'x')
    ? game.currentTurn = 'o'
    : game.currentTurn = 'x';
}

function checkCreateSession(user) {
  if (!game.uuids.hasOwnProperty(user.uuid)) {
    //let sessionGame = _.cloneDeep(game.default);
    game.uuids[user.uuid] = structuredClone(game.default);
    console.log('checkCreateSession', game.uuids);
  }
  return game.uuids[user.uuid];
}

function turn(ctx) {
  //ctx.body = 'ok';
  const turn = ctx.request.body;
  if (('player' in turn) && ('cell' in turn)) {
    let sessionGame = checkCreateSession(ctx.state.user);
    if (turn.player === sessionGame.currentTurn) {
      sessionGame.cells[turn.cell] = sessionGame.currentTurn;
      sessionGame.currentTurn = nextTurn(sessionGame.currentTurn);

      get(ctx);
    } else {
      ctx.response.status = 422;
      ctx.body = ctx.request.body;
    }
  } else {
    ctx.response.status = 422;
    ctx.body = ctx.request.body;
  }
}

module.exports = {
  get,
  newGame,
  turn
}
