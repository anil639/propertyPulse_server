const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Anil");
});

const port = 8000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
