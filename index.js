const express = require("express");
const app = express();

//let bodyParser = require("body-parser");

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const names = [];

app.get("/", (req, res) => {
  res.send(names);
});

app.post("/users", (req, res) => {
  names.push(req.body);

  res.send(names);
});

app.listen(3000, () => {
  console.log("Server Running...");
});
