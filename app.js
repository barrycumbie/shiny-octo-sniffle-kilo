const express = require("express");
const app = express();

console.log("I am on the server");

app.get("/", function (req, res) {
  res.send("<h1>Hello World From Express!</h1>");
});

app.listen(3000);
