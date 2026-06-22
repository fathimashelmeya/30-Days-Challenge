const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/greet/:name", (req, res) => {
  let name = req.params.name;
  res.render("index", { name });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
