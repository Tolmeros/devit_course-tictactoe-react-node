const Router = require('@koa/router');

const GameControllers = require('../controllers/game.js');
const authenticate = require('../middlewares/authenticate');
const jwt = require('../middlewares/jwt');

const router = new Router();

router.prefix('/api');

router.get('/test', (ctx, next) => {
  console.log('api get');
  ctx.body = 'test';
});

router.post('/login', authenticate);

router.get('/game', jwt, GameControllers.get);
router.delete('/game', jwt, GameControllers.newGame);
router.put('/game', jwt, GameControllers.turn);

module.exports = router;
