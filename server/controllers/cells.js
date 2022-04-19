const cells = require('../models/cells.js');

function get(ctx, next) {
  ctx.body = {cells};
}

function clear(ctx, next) {
  cells.fill('');
  ctx.body = 'ok';
}

function setTurn(ctx, next) {
  console.log(ctx.request.body);
  console.log(typeof ctx.request.body);
  //ctx.body = 'ok';
  const turn = ctx.request.body;
  if (('player' in turn) && ('cell' in turn)) {
    cells[turn.cell] = turn.player;
    //this.get(ctx, next);
    get(ctx, next);
  } else {
    ctx.body = ctx.request.body;
  }
}

module.exports = {
  get,
  clear,
  setTurn
}


