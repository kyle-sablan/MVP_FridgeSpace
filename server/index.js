const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();
app.use(express.static("client/public"));
app.use(express.json());

//setting up basic routes
app.get("/fridges", (req, res) => {
  res.status(200).send("all good from fridges");
});

app.get("/inventory/:fridgeId", (req, res) => {
  console.log(req.params);
  res.status(200).json(req.params);
});

app.get("/users", (req, res) => {
  res.status(200).json(req.query);
});

app.post("/fridges", (req, res) => {
  console.log(req.body);
  res.status(201).json("all good");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.status(200).send("all good");
});

app.post("/inventory/:fridgeId", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.status(200).send("all good");
});

//add in other routes for updates / deletions

app.listen(PORT, () => {
  console.log(`listening in on port ${PORT}`);
});
