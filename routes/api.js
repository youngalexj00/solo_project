const path = require("path");
const express = require('express');
const db = require(path.resolve(__dirname, '../models/dbModel.js'));

const router = express.Router();

router.post('/table/:id', (req, res) => {
  console.log('entering route.post in api')
  db.getTable(req.body.tableName, (data) => {
    res.json(data.rows);
  });
});

module.exports = router;