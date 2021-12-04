const express = require('express');
const path = require('path')
const PORT = 3000;

const app = express();
app.use(express.static('client/public'));

app.listen(PORT, () => {
  console.log(`listening in on port ${PORT}`);
});