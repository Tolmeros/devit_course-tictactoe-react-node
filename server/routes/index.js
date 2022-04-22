const combineRouters = require('koa-combine-routers');

const apiRouter = require('./api');

const router = combineRouters(
  apiRouter,
);

module.exports = router;
