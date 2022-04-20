const Router = require('@koa/router');
const GameControllers = require('../controllers/game.js');

const router = new Router();

router.prefix('/api');

router.get('/test', (ctx, next) => {
  console.log('api get');
  ctx.body = 'test';
});

router.get('/game', GameControllers.get);
router.delete('/game', GameControllers.newGame);
router.put('/game', GameControllers.turn);

module.exports = router;
