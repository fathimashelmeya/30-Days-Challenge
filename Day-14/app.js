const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/add", (req, res) => {
  let num1 = Number(req.query.a);
  let num2 = Number(req.query.b);

  let sum = num1 + num2;

  res.render("index", { num1, num2, sum });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
