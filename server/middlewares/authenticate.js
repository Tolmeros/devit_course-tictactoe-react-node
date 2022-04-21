const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

module.exports = (ctx) => {
  //console.log('authenticate', ctx);
  ctx.status = 200;
  ctx.body = {
    token: jwt.sign(
      {
        uuid: uuidv4(),
        userName: ctx.request.body.userName || '',
      },
      'YourKey'
    ), // Store this key in an environment variable
    message: 'Successful Authentication'
  };

  return ctx;
};
