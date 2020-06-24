const path = require("path");
const express = require('express');
const db = require(path.resolve(__dirname, '../models/dbModel.js'));

const router = express.Router();

router.post('/table/:id', (req, res) => {
  console.log('entering route.post in api')
  db.getTable(req.body.table, (data) => {
    if (data.rows.length === 0) db.getColumnNames(req.body.table, (data) => {
      console.log('data.rows inside callback of getColumnNames', data.rows)
      res.json({column_names: data.rows})
    })
    else res.json(data.rows);
  });
});

router.delete('/table/:id', (req, res) => {
  db.deleteRow(req.body.table, req.body.primaryKey, req.body.primaryValue, (data) => {
    res.status(200).send('successful delete');
  })
})

module.exports = router;