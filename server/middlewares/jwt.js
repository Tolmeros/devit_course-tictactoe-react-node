const jwt = require('koa-jwt');

const {getProcessEnv} = require('../helpers.js');

const sercretKey = getProcessEnv('JWT_SECRET_KEY');

module.exports = jwt({
  secret: sercretKey,
});
