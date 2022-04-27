const Router = require('@koa/router');

const GameControllers = require('../controllers/game.js');
const authenticate = require('../middlewares/authenticate');
const jwt = require('../middlewares/jwt');

const router = new Router();

router.prefix('/api');

router.post('/login', authenticate);

router.get('/game', jwt, GameControllers.get);
router.delete('/game', jwt, GameControllers.newGame);
router.put('/game', jwt, GameControllers.turn);

router.get('/games', jwt, GameControllers.gamesHistory);

module.exports = router;
