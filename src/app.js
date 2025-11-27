const express = require('express');
const { sum } = require('./math');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', value: sum(2,3) });
});

module.exports = app;
