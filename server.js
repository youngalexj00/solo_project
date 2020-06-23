const express = require('express')
const app = express();
const path = require('path');
const db = require(path.resolve(__dirname, './Models/dbModel.js'))
const PORT = 3000;

app.use(express.static(__dirname));

app.use('/build', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/table', (req, res) => {
  db.getTable((data) => {
    console.log('inside callback for getTable')
    console.log('rows', data.rows)
    res.send("sending response from /table")
  });
});

app.listen(3000, (req, res) => console.log('server running on port '+PORT));