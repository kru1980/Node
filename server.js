const express = require("express");

const todos = require("./api/todos");

const server = express();

server.get("/api/todos", (req, res) => {
  res.json(todos);
});

server.listen(3000);
