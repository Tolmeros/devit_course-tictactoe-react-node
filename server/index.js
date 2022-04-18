const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

const port = 3000;


app.use(serve('static/'));

/*
app.use(async ctx => {
  ctx.body = 'Hello World';
});
*/

app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);
