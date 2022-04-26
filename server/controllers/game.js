const Game = require('../models/game.js');

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

  return '';
};

const turnCount = (cells) => cells.reduce((count, cell) => {
  return cell ? count + 1 : count;
}, 0);

async function get(ctx) {
  console.log('get', ctx.request.body);
  const dbGame = await checkCreateSession(ctx.state.user);

  const winner = checkForWinner(dbGame.cells);
  const draw = (!winner && turnCount(dbGame.cells) === 9);

  dbGame.winner = winner;
  dbGame.draw = draw;
  await dbGame.save();

  const result = {
    currentTurn: dbGame.currentTurn,
    cells: dbGame.cells,
    winner,
    draw,
  }

  console.log(result);
  ctx.body = result;
  //ctx.response.status = 200; //?
}

async function newGame(ctx) {
  console.log('newGame', ctx.request.body);

  let dbGame = await checkCreateSession(ctx.state.user);
  if (dbGame.winner || dbGame.draw) {
    dbGame.active = false;
    await dbGame.save();

    dbGame =  await createSession(ctx.state.user);
    await dbGame.save();
  }

  await get(ctx);
}

function nextTurn(game) {
  return (game.currentTurn === 'x')
    ? 'o'
    : 'x';
}

/*
function checkCreateSession(user) {
  if (!game.uuids.hasOwnProperty(user.uuid)) {
    //let sessionGame = _.cloneDeep(game.default);
    game.uuids[user.uuid] = structuredClone(game.default);
    console.log('checkCreateSession', game.uuids);
  }
  return game.uuids[user.uuid];
}
*/

async function createSession(user) {
  return await await Game.create({playerO_uuid: user.uuid, playerX_uuid: user.uuid});
}

async function checkCreateSession(user) {
  let gameDb = await Game.findOne({playerO_uuid: user.uuid, active: true}).exec();
  console.log('gameDb', gameDb);

  if (!gameDb) {
    gameDb = await createSession(user);
    console.log('gameDb', gameDb);
  }

  return gameDb;
}

async function turn(ctx) {
  //ctx.body = 'ok';
  const turn = ctx.request.body;
  if (('player' in turn) && ('cell' in turn)) {
    const dbGame = await checkCreateSession(ctx.state.user);
    if (turn.player === dbGame.currentTurn) {
      dbGame.cells[turn.cell] = dbGame.currentTurn;
      dbGame.currentTurn = nextTurn(dbGame);
      await dbGame.save();
      await get(ctx);
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
