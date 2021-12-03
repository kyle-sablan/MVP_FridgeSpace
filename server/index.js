const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Fridge Space');
});

app.listen(PORT, () => {
  console.log(`listening in on port ${PORT}`);
});