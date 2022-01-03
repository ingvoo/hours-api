const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(morgan("dev"));

// Middleware to disable CORS
server.use((req, res, next) => { 
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
});