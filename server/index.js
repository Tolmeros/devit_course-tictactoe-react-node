
require('dotenv').config();

const Koa = require('koa');
const compress = require('koa-compress')
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const mount = require("koa-mount");
const mongoose = require('mongoose');

const routes = require('./routes');

const {getProcessEnv} = require('./helpers.js');

const dbUri = getProcessEnv('MONGO_DB_URI');

mongoose.connect(dbUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error: "));
db.once("open", function () {
  console.log("DB connected successfully");
});

const app = new Koa();

const port = process.env.PORT || 5000;

app.use(compress());

app.use(bodyParser());

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
