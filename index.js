const express = require("express");
const postRouter = require("./posts/post-router");
const welcomeRouter = require("./Welcome/welcome-router");
const deleterRouter = require("./Delete/delete-router");
const putRouter = require("./Put/put-router");

const server = express();
const port = 9000;

server.use(express.json());
server.use(postRouter);
server.use(welcomeRouter);
server.use(deleterRouter);
server.use(putRouter);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
