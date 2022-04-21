const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
//koa bodyparser

const routes = require('./routes');

const app = new Koa();

const port = process.env.PORT || 5000;

app
  .use(koaBody())
  .use(routes.routes())
  .use(routes.allowedMethods());

app.use(serve('static/'));
// переменная dirName

app.use(serve('static_react/'));


app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);
