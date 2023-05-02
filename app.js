const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

console.log("I am on the server");

app.get("/", function (req, res) {
  res.send("<h1>Hello World From Express!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});
