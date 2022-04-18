const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');

const routes = require('./routes');

const app = new Koa();

const port = 3000;


app.use(serve('static/'));

/*
app.use(async ctx => {
  ctx.body = 'Hello World';
});
*/

app
  .use(koaBody())
  .use(routes.routes())
  .use(routes.allowedMethods());

app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);
