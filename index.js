const express = require("express");
const app = express();
const port = 3000;

app.get("/netflix", (req, res) => {
  res.sendFile("Assets/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
