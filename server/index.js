const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');
const mount = require("koa-mount");

const routes = require('./routes');

const app = new Koa();

const port = process.env.PORT || 5000;

//app.use(koaBody());
app.use(bodyParser());

/*
app
  .use(routes.routes())
  .use(routes.allowedMethods());
*/

//app.use(serve(__dirname + '/static'));
app.use(serve(__dirname + '/static_react'));

app.use(routes());

const static_pages = new Koa();
static_pages.use(serve(__dirname + "/static"));
app
  .use(async (ctx, next) => {
    ctx.request.path = '/';
    await next();
  })
  .use(mount("/", static_pages));



app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);
