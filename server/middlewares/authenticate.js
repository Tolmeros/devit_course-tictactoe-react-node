const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const {getProcessEnv} = require('../helpers.js');

const sercretKey = getProcessEnv('JWT_SECRET_KEY');

module.exports = (ctx) => {
  //console.log('authenticate', ctx);
  ctx.status = 200;
  ctx.body = {
    token: jwt.sign(
      {
        uuid: uuidv4(),
        userName: ctx.request.body.userName || '',
      },
      sercretKey
    ), // Store this key in an environment variable
    message: 'Successful Authentication'
  };

  return ctx;
};
