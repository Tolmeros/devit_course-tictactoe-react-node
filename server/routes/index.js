const Router = require('@koa/router');
const CitiesControllers = require('../controllers/cells.js');

const router = new Router();

router.prefix('/api');

router.get('/test', (ctx, next) => {
  console.log('api get');
  ctx.body = 'test';
});

router.get('/cells', CitiesControllers.get);
router.delete('/cells', CitiesControllers.clear);
router.put('/cells', CitiesControllers.setTurn);

module.exports = router;
