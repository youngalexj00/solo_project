const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://fimobwue:GtL0MZLIaJOpI2hUnSuVpeZAQMJZnHMW@ruby.db.elephantsql.com:5432/fimobwue',
  password: 'GtL0MZLIaJOpI2hUnSuVpeZAQMJZnHMW'
})

const db = {};

db.getTable = (tableName, callback) => {
  let command = `SELECT * FROM ${tableName};`
  pool.query(command, (error, dbResponse) => {
    if (error) console.log("ERROR", error);
    else return callback(dbResponse);
  })
}

module.exports = {
  getTable: db.getTable
}