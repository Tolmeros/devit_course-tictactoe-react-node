const Router = require('@koa/router');
const CellsControllers = require('../controllers/cells.js');
const GameControllers = require('../controllers/game.js');

const router = new Router();

router.prefix('/api');

router.get('/test', (ctx, next) => {
  console.log('api get');
  ctx.body = 'test';
});

router.get('/cells', CellsControllers.get);
router.delete('/cells', CellsControllers.clear);
router.put('/cells', CellsControllers.setTurn);

router.get('/game', GameControllers.get);
router.delete('/game', GameControllers.newGame);
router.put('/game', GameControllers.turn);

module.exports = router;
